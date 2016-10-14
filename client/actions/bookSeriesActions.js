import {restActionsGenerator} from 'react-data-actions';

const bookSeriesActions = restActionsGenerator({
  path: `/book_series`,
  extension: 'json',
  maxAge: 5000000,
});

export {
  bookSeriesActions
}
