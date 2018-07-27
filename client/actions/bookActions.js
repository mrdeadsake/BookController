import { FETCH_BOOKS, NEW_BOOKS } from './types';

export const fetchBooks = (id) => dispatch => {
	fetch(`${location.origin}/book_series/1/books.json`, {
    headers: {
      'content-type': 'application/json'
    },
  })
		.then(res=>res.json())
		.then(books=>dispatch({
			type: FETCH_BOOKS,
			payload: books
		})
	);
}

// const bookActions = restActionsGenerator({
//   path: `/book_series/:id/book`,
//   extension: 'json',
//   maxAge: 5000000,
// });

// const chapterActions = restActionsGenerator({
//   path: `/book_series/:id/chapter`,
//   extension: 'json',
//   maxAge: 5000000,
// });

// export {
//   bookActions,
//   chapterActions
// }
