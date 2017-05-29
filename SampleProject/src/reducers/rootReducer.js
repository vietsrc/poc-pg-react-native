import { combineReducers } from 'redux';
import articles from '../modules/articles/articles.reducer';

const rootReducer = combineReducers({
  articles
});

export default rootReducer;
