import {restActionsGenerator} from 'react-data-actions';

const chapterActions = restActionsGenerator({
  path: `/chapter`,
  extension: 'json',
  maxAge: 5000000,
});

export {
  chapterActions
}
