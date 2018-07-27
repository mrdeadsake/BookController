import { FETCH_CHAPTERS, NEW_CHAPTERS } from './types';

export const fetchChapters = (book_id) => dispatch => {
  fetch(`${location.origin}/book_series/book/${book_id}/chapter/index.json`, {
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(res=>res.json())
    .then(chapters=>dispatch({
      type: FETCH_CHAPTERS,
      payload: chapters
    })
  );
}