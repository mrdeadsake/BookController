import {restActionsGenerator} from 'react-data-actions';

const chapterActions = restActionsGenerator({
  path: `book/:id/chapter/index`,
  extension: 'json',
});

export {
  chapterActions,
}
