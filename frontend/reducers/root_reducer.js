import {combineReducers} from 'redux';

import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import TopicsReducer from './topics_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  topics: TopicsReducer
});

export default RootReducer;
