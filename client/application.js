require('./stylesheets/application');
require('babel-polyfill');

// import Airbrake from 'airbrake-js';
import React from 'react';
import ReactDOM from 'react-dom';

import { useRouterHistory } from 'react-router';
import Navigation from './components/Navigation';
import { configureFetch, DataManager, DataProvider } from 'react-data-actions';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

const history = useRouterHistory(createBrowserHistory)({
  basename: `/`,
});

const dataManager = DataManager.getInstance();

Navigation.configure({
  sitePath: `/`,
  history: history,
});

// window.airbrake = new Airbrake({
//   projectId: window.env.AIRBRAKE_PROJECT_ID,
//   projectKey: window.env.AIRBRAKE_API_KEY,
// });
// window.onerror = window.airbrake.onerror;

// window.flashNotification = function (messages) { // this temp, eventually we will need to connect it correctly
//   // flashNotificationActions.setAction(messages);
// };

function renderAction () {
  ReactDOM.render((
    <DataProvider dataManager={ dataManager }>
      { routes(history) }
    </DataProvider>), document.getElementById('react-container'));

  history.listen(location => {

  });
}

window.addEventListener('load', () => {
  configureFetch({
    headers: {
      'X-CSRF-Token': window.env.csrfToken,
    },
  });
  renderAction();
});
