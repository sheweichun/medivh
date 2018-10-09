// import {Button,Radio,Input,Select} from '@alife/next';
import React, { Component } from 'worker-react';
import Runtime, { render } from 'worker-react-runtime';
import './worker.less';

class Test extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      counter: 1,
    };
  }
  shouldComponentUpdate() {
    return true;
  }
  componentWillReceiveProps(nextProps) {
    console.log('in Test nextProps :', nextProps);
        // debugger;
    this.setState({

    });
  }
  componentWillUnmount() {
    console.log('in Test componentWillUnmount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate!!! test');
  }
  render() {
    const { count, other } = this.props;
    return (<button onClick={() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }}
    >teest {count} counter!!! state counter :{this.state.counter}
      {other}
    </button>);
  }
}


function generateRandomData(len, dataIndexs) {
  const ret = [];
  for (let i = 0; i < len; i++) {
    ret.push(dataIndexs.reduce((obj, item) => {
      obj[item.dataIndex] = 10000 * Math.random() + 100;
      return obj;
    }, {}));
  }
  return ret;
}
const dataIndexs = [{
  dataIndex: 'a',
  title: 'a',
}, {
  dataIndex: 'b',
  title: 'b',
}, {
  dataIndex: 'c',
  title: 'c',
}, {
  dataIndex: 'd',
  title: 'd',
}, {
  dataIndex: 'e',
  title: 'e',
}, {
  dataIndex: 'f',
  title: 'f',
}, {
  dataIndex: 'g',
  title: 'g',
}, {
  dataIndex: 'h',
  title: 'h',
}];

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: '洛丹',
      visible: false,
      count: 0,
      tableData: generateRandomData(3, dataIndexs),
      radioValue: 'orange',
      show: true,
    };
  }
  componentWillReceiveProps(nextProps) {
  }

  componentDidUpdate() {
        // console.log('componentDidUpdate');
  }
  loadData() {
    this.setState({
      tableData: generateRandomData(30, dataIndexs),
    });
        // setTimeout(this.loadData.bind(this),20);
  }
  componentDidMount() {
        // this.loadData()
  }

    // onChange=(value)=> {
    //     this.setState({
    //         radioValue: value
    //     });
    // }
  renderList() {
    const ret = [];
    for (let i = 0; i < 2000; i++) {
      ret.push(<li key={i}>{i}</li>);
    }
    return ret;
  }
  render() {
    const { value, show, count, tableData, visible } = this.state;
        // console.log('count :',count)
    const { children } = this.props;
    return (<div
      styleName="test"
      style={{ padding: '12px' }}
      onClick={() => {
        console.log('out click');
        this.setState({
          show: !show
        });
      }}
    >
      {children}
      <table dataSource={tableData}>
        {
            dataIndexs.map((item, itemIndex) => <table-column key={itemIndex} dataIndex={item.dataIndex} title={item.title} />)
        }
      </table>
      <overlay-popup visible={visible} onVisibleChange={(visible) => {
        console.log('visible :', visible);
        this.setState({
          visible
        });
      }} trigger={<button>123</button>}>
          <span>hello world</span>
      </overlay-popup>
      <button type="primary">按钮1234</button>
      <Test
        ref={(instance) => {
          console.log('instance :', instance);
        }}
        count={count}
        other={show && <div>古泽</div>}
      />
      <next-button>锦此</next-button>
      <select dataSource={[{
        label: 'value1',
        value: 1
      }, {
        label: 'value2',
        value: 2
      }]} popupContent={<div>洛丹</div>} />
    </div>);
  }
}

export default App;
