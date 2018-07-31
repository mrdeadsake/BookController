import { FETCH_DETAILS, NEW_DETAILS } from './types';

export const createDetails = (book_series_id, detailsData) => dispatch => {
  console.log("create details called")
  fetch(`${location.origin}/book_series/${book_series_id}/character.json`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(detailsData)
  })
    .then(res=>res.json())
    .then(detail => dispatch({
      type: NEW_DETAILS,
      payload: detail
    })
  );
}
