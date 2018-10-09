// import {Button,Radio,Input,Select} from '@alife/next';
import React, {Component } from 'worker-react';
import Runtime, { render } from 'worker-react-runtime';
import {Link, HashRouter, Route, createWindow} from 'worker-react-router';
import './app.less';


class Home extends Component {
  render() {
    return (<div>
      <h2>Home</h2>
    </div>);
  }
}

class Demo extends Component {
  render() {
    return (<div>
      <h2>demo</h2>
    </div>);
  }
}

class About extends Component {
  render() {
    const {} = this.props;
    return (<div onClick={() => {
      this.props.history.push('/');
    }}>
      <h2>About</h2>
      <div>
        <Route exact path="/about" component={() => {
          return <div>empty</div>;
        }} />
        <Route key="/about/a" path="/about/a" component={Home} />
        <Route key="/about/b" path="/about/b" component={Demo} />
        <Route key="/about/c/:topicId" path="/about/c/:topicId" component={Topics} />
      </div>
    </div>);
  }
}
class Topics extends Component {
  render() {
    const { match } = this.props;
    return (<div>
      <h3>{match && match.params.topicId}</h3>
    </div>);
  }
}
class App extends Component {
  render() {
    const {location} = this.props;
    return (<HashRouter context={createWindow(Runtime, 'RouterRender', location)}>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About</Link>
            <ul>
              <li><Link to="/about/a">About-a</Link></li>
              <li><Link to="/about/b">About-b</Link></li>
              <li><Link to="/about/c/3">About-c</Link></li>
            </ul>
          </li>
          <li><Link to="/topics/3">Topics</Link></li>
        </ul>

        <hr />

        <Route key="/" exact path="/" component={Home} />
        <Route key="/about" path="/about" component={About} />
        <Route key="/topics/:topicId" path="/topics/:topicId" component={Topics} />
      </div>
    </HashRouter>);
  }
}
// console.log('global12 :', global, 'search', location.search);
render((param, location) => {
  return <App data={param} location={location} />;
});
