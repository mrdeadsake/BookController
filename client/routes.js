import React from 'react';
import BookControlApp from './layouts/BookControlApp';
import BasePage from './layouts/BasePage';
import Landing from './views/Landing';
import BookSeriesShow from './views/BookSeriesShow';
import BookSeriesIndex from './views/BookSeriesIndex';
import BookSeriesNew from './views/BookSeriesNew';
import About from './views/About';
import DndCharacterShow from './views/DndCharacterShow';
import { Router, Route, IndexRoute, Redirect, IndexRedirect } from 'react-router';

export default function routes (history) {
    return (
      <Router history={ history }>
        <Route path="/" component={ BookControlApp }>
          <Route path="/" component={BasePage}>
            <Route path="overview" component={ Landing } />
            <Route path="book_series/:id" component={ BookSeriesShow } />
            <Route path="about" component={ About } />
            <Route path="dnd" component= { DndCharacterShow } />
          </Route>
        </Route>
      </Router>
    );
}
