import {restActionsGenerator} from 'react-data-actions';

const characterActions = restActionsGenerator({
  path: `/character`,
  extension: 'json',
  maxAge: 5000000,
});

const characterDetailsActions = restActionsGenerator({
  path: `/character_details`,
  extension: 'json',
});

export {
  characterActions,
  characterDetailsActions
}
