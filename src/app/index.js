import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import style from './style.css';

const HelloWorldComponent = () => {
  return <div className={style.greetings}>Hello, World!</div>;
};

const HelloMagicComponent = () => {
  return <div>Hello, Magic!</div>;
};

const app = <Router history={browserHistory}>
  <Route path='/hello-world' component={HelloWorldComponent} />
  <Route path='/hello-magic' component={HelloMagicComponent} />
</Router>;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  ReactDOM.render(app, document.getElementById('app'));
}

export default app;
