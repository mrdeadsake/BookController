require('./stylesheets/application');
require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';

import { useRouterHistory } from 'react-router';
import Navigation from './components/Navigation';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

const history = useRouterHistory(createBrowserHistory)({
  basename: `/`,
});


Navigation.configure({
  sitePath: `/`,
  history: history,
});

function renderAction () {
  ReactDOM.render((
      <Provider store={store}>
      { routes(history) }
      </Provider>
    ), document.getElementById('react-container'));

  history.listen(location => {

  });
}

window.addEventListener('load', () => {
  renderAction();
});
