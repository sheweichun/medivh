// import {Button,Radio,Input,Select} from '@alife/next';
import React from 'worker-react';
import { render } from 'worker-react-runtime';
import { Provider } from 'worker-react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Dashboard from './container/dashboard';
import './worker.less';


const store = createStore(rootReducer);

render(<Provider store={store}>
  <Dashboard />
</Provider>, '#container', {});
