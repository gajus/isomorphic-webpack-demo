import React from 'react';
import ReactDOM from 'react-dom';

const app = <div>Hello, World!</div>;

if (typeof ISOMORPHIC_WEBPACK === 'undefined') {
  ReactDOM.render(app, document.getElementById('app'));
}

export default app;
