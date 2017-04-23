import {restActionsGenerator} from 'react-data-actions';

const dndCharacterActions = restActionsGenerator({
  path: `/dnd/:playername`,
  extension: 'json',
  maxAge: 5000000,
});

export {
  dndCharacterActions
}
