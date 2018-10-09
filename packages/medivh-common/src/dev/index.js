import {DOM_CREATE, DOM_APPENDCHILD, ID, DOM_INSERTBEFORE} from '../constant';
import {invoke} from '../rpc/index';
import {isArray} from '../util/index';

export function devHook() {
  if (process.env.NODE_ENV === 'development') {
    const PREFIX = 'webworkerstyle';
    let count = 0;
    function genId() {
      return `${PREFIX}-${++count}`;
    }
    class Element {
      constructor(tag, isQuery) {
        this.tag = tag;
        this.nodeType = 1;
        this[ID] = genId();
        this.isQuery = isQuery;
        this.attrs = Object.create(null);
        this.child = [];
        this.childJS = [];
        this.firstChild = null;
        this.lastChild = null;
        this.nextSibling = null;
        if (!isQuery) {
          invoke(DOM_CREATE, this.toJS());
        }
      }
      setAttribute(key, value) {
        this.attrs[key] = value;
      }
      appendChild(item) {
        const ele = item.toJS();
        const {tag, nodeType, isQuery, attrs} = this;
        const beforeLastChild = this.child[this.child.length - 1];
        if (beforeLastChild) {
          beforeLastChild.nextSibling = item;
        }
        this.child.push(item);
        this.childJS.push(ele);
        this.firstChild = this.child[0];
        this.lastChild = this.child[this.child.length - 1];
        invoke(DOM_APPENDCHILD, {
          tag,
          nodeType,
          isQuery,
          attrs,
          [ID]: this[ID],
          child: [ele]
        });
      }
      insertBefore(item, target) {
        let index = -1, targetEl;
        const ele = item.toJS();
        for (let i = 0; i < this.child.length; i++) {
          targetEl = this.child[i];
          if (targetEl[ID] === target[ID]) {
            index = i;
            break;
          }
        }
        if (index === -1) {
          return
;
        }
        const beforeSibling = this.child[index - 1];
        beforeSibling && (beforeSibling.nextSibling = item);
        item.nextSibling = target;
        this.child.splice(index, 0, item);
        this.childJS.splice(index, 0, ele);
        this.firstChild = this.child[0];
        this.lastChild = this.child[this.child.length - 1];
        invoke(DOM_INSERTBEFORE, {
          opr: this.toJS(),
          ele,
          target: target.toJS()
        });
      }
      toJS() {
        const {tag, nodeType, isQuery, attrs, childJS} = this;
        return {
          tag,
          nodeType,
          isQuery,
          attrs,
          child: childJS,
          [ID]: this[ID]
        };
      }
        }
    class Text {
      constructor(content) {
        this.nodeType = 3;
        this.content = content;
        this[ID] = genId();
        invoke(DOM_CREATE, this.toJS());
      }
      toJS() {
        const {nodeType, content} = this;
        return {
          nodeType,
          content,
          [ID]: this[ID]
        };
      }
        }
    global.window = {};
    global.document = {
      createElement: function(tag) {
        return new Element(tag);
      },
      querySelector(target) {
        return new Element(target, true);
      },
      createTextNode: function(content) {
        return new Text(content);
      }
    };
  }
}

export function devHandle(data, worker) {
  if (process.env.NODE_ENV === 'development') {
    let domMap = worker.domMap;
    if (domMap == null) {
      domMap = worker.domMap = new Map();
    }
    const type = data.type;
    function getElement(data) {
      if (data.isQuery) {
        return document.querySelector(data.tag);
      }
      return domMap.get(data[ID]);
    }
    function parse(data) {
      if (data == null) return data;
      if (isArray(data)) {
        return data.map((item) => {
          return parse(item);
        });
      }
      const {tag, nodeType, isQuery, attrs, child, content} = data;
      let eleChild = parse(child);
      let ele = getElement(data);
      const attrsKeys = attrs ? Object.keys(attrs) : null;
      (attrsKeys) && attrsKeys.forEach((name) => {
        ele.setAttribute(name, attrs[name]);
      });
      (eleChild && ele) && eleChild.forEach((ch) => {
        ele.appendChild(ch);
      });
      return ele;
    }
    function createElement(data) {
      const {tag, nodeType, content} = data;
      let ele;
      if (nodeType === 1) {
        ele = document.createElement(tag);
      } else {
        ele = document.createTextNode(content);
      }
      domMap.set(data[ID], ele);
    }
    function insertBefore(vopr, vele, vtarget) {
      let opr = getElement(vopr);
      let ele = getElement(vele);
      let target = getElement(vtarget);
      opr.insertBefore(ele, target);
    }
    if (type === DOM_CREATE) {
      createElement(data.data);
    } else if (type === DOM_APPENDCHILD) {
      parse(data.data);
    } else if (type === DOM_INSERTBEFORE) {
      const {opr, ele, target} = data.data;
      insertBefore(opr, ele, target);
    }
  }
}