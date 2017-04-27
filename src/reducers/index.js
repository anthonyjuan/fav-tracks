import { combineReducers } from 'redux';

import searchReducer from './searchReducer';
import tracksReducer from './tracksReducer';

const rootReducer = combineReducers({
  searchResult: searchReducer,
  tracks: tracksReducer,
});

export default rootReducer;
