import {restActionsGenerator} from 'react-data-actions';

const characterDetailsActions = restActionsGenerator({
  path: `/character_details`,
  extension: 'json',
  maxAge: 5000000,
});

export {
  characterDetailsActions
}
