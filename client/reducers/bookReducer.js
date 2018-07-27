import { FETCH_BOOKS, NEW_BOOKS } from '../actions/types';

const initialState = {
	items: [],
	item: {}
}

export default function(state = initialState, action ) {
	switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
	}
}