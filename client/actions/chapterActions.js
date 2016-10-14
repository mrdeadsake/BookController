import {restActionsGenerator} from 'react-data-actions';

const chapterActions = restActionsGenerator({
  path: `/book_series/:series_id/chapter/:chapter_id`,
  extension: 'json',
});

export {
  chapterActions,
}
