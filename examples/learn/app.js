import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table } from '@alife/next';
import './index.less';
// import {Button,Radio,Input,Select} from '@alife/next';

// import './worker.less';
class Test extends Component {
  constructor(props) {
    super();
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
    const { count } = this.props;
    return (<button onClick={() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }}
    >teest {count} counter!!! state counter :{this.state.counter}</button>);
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
  constructor(props) {
    super(props);
    this.state = {
      value: '洛丹',
      count: 0,
      tableData: generateRandomData(10, dataIndexs),
      radioValue: 'orange',
      show: true,
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps :', nextProps);
  }
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextProps,nextState);
    //     return true
    // }
    // componentDidMount(){
    //     console.log('componentDidMount');
    // }
    // componentWillMount(){
    //     console.log('componentWillMount')
    // }
  componentDidUpdate() {
        // console.log('componentDidUpdate');
  }
  loadData() {
    const now = Date.now();
    this.setState({
      tableData: generateRandomData(1000, dataIndexs),
    });
    console.log(Date.now() - now);
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
    const { value, show, count, tableData } = this.state;
        // console.log('count :',count)
    const { children } = this.props;
    return (<div
      styleName="container"
      style={{ padding: '12px' }}
      onClick={() => {
        console.log('out click');
      }}
    >
      <Table dataSource={tableData}>
        {
                    dataIndexs.map((item, itemIndex) => <Table.Column key={itemIndex} dataIndex={item.dataIndex} title={item.title}></Table.Column>)
                }
      </Table>
      <Test count={4} />
    </div>);
  }
}
const now = Date.now();
console.group();
// debugger;
ReactDOM.render(<App a={3}>test33232</App>, document.getElementById('container'));
console.groupEnd();
// console.log(Date.now() - now);
