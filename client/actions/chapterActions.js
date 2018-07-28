import {restActionsGenerator} from 'react-data-actions';

const chapterActions = restActionsGenerator({
  path: `book/:id/chapter/index`,
  extension: 'json',
  maxAge: 50000000,
});

export {
  chapterActions,
}
