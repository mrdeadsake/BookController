import {restActionsGenerator} from 'react-data-actions';

const bookActions = restActionsGenerator({
  path: `/book_series/:id/book`,
  extension: 'json',
  maxAge: 5000000,
});

export {
  bookActions
}
