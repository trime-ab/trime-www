import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './ui/App';
import appService from './ui/App.service';
import l from './logic/Logger';
import { Provider } from 'mobx-react';
import * as stores from './stores';

appService.init();

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);
