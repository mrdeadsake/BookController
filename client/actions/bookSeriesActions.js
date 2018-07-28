import {restActionsGenerator} from 'react-data-actions';

const bookSeriesActions = restActionsGenerator({
  path: `/book_series`,
  extension: 'json',
  maxAge: 50000000,
});

const bookSeriesBookActions = restActionsGenerator({
  path: `/books`,
  extension: 'json',
  maxAge: 50000000,
});

export {
  bookSeriesActions,
  bookSeriesBookActions
}
