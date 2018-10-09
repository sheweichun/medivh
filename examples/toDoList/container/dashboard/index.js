import React, { Component } from 'worker-react';
import Footer from '../footer';
import AddTodo from '../addToDo';
import VisibleTodoList from '../visibleTodoList';
import './index.less';


export default class Dashboard extends Component {
  render() {
    return (<div styleName="container">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>);
  }
}

// <Footer></Footer>
