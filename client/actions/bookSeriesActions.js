import { FETCH_BOOK_SERIES, FETCH_BOOK_SERIES_INDEX, NEW_BOOK_SERIES } from './types';

const fetchBookSeriesIndex = () => dispatch => {
  fetch(`${location.origin}/book_series.json`, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res=>res.json())
    .then(bookSeries=>dispatch({
      type: FETCH_BOOK_SERIES_INDEX,
      payload: bookSeries
    })
  );
}

const fetchBookSeries = (id) => dispatch => {
  fetch(`${location.origin}/book_series/${id}.json`, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res=>res.json())
    .then(bookSeries=>dispatch({
      type: FETCH_BOOK_SERIES,
      payload: bookSeries
    })
  );
}




export {
  fetchBookSeries,
  fetchBookSeriesIndex
}
