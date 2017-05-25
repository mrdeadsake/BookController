import {restActionsGenerator} from 'react-data-actions';

const dndCharacterActions = restActionsGenerator({
  path: `/dnd/:id`,
  extension: 'json',
  maxAge: 5000000,
});

const dndActions = restActionsGenerator({
  path: `/dnd`,
  extension: 'json',
  maxAge: 50000000,
});

export {
  dndCharacterActions,
  dndActions
}
