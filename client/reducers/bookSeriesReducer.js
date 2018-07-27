import { FETCH_BOOK_SERIES, FETCH_BOOK_SERIES_INDEX, NEW_BOOK_SERIES } from '../actions/types';

const initialState = {
  items: [],
  item: {}
}

export default function(state = initialState, action ) {
  switch (action.type) {
    case FETCH_BOOK_SERIES:
      return {
        ...state,
        item: action.payload
      }
      case FETCH_BOOK_SERIES_INDEX:
        return {
          ...state,
          items: action.payload
        }
    default:
      return state;
  }
}