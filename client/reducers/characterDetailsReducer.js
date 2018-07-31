import { NEW_DETAILS } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action ) {
  switch (action.type) {
    case NEW_DETAILS:
      console.log('new details')
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;
  }
}