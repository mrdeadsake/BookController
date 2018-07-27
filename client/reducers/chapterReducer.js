import { FETCH_CHAPTERS, NEW_CHAPTERS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action ) {
  switch (action.type) {
    case FETCH_CHAPTERS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}