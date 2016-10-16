import React from 'react';
import BookControlApp from './layouts/BookControlApp';
import BasePage from './layouts/BasePage';
import Landing from './views/Landing';
import BookSeriesShow from './views/BookSeriesShow';
import BookSeriesIndex from './views/BookSeriesIndex';
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

export default function routes (history) {
    return (
      <Router history={ history }>
        <Route path="/" component={ BookControlApp }>
          <Route path="/" component={BasePage}>
            <Route path="overview" component={ BookSeriesIndex } />
            <Route path="book_series/:id" component={BookSeriesShow} />
          </Route>
        </Route>
      </Router>
    );
}