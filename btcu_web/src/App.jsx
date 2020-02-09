import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/Index.jsx'

const contentNode = document.getElementById('contents');

ReactDOM.render(<Index />, contentNode);

if (module.hot) {
  module.hot.accept();
}