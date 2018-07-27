import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import bookSeriesReducer from './bookSeriesReducer';
import chapterReducer from './chapterReducer';

export default combineReducers({
	books: bookReducer,
  bookSeries: bookSeriesReducer,
  chapters: chapterReducer,
});
