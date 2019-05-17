import './index.css';

import { Provider } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';

import * as stores from './stores';
import App from './ui/App';
import appService from './ui/App.service';

appService.init();

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
