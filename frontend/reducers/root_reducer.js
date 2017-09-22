import {combineReducers} from 'redux';

import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import TopicsReducer from './topics_reducer';
import QuestionsReducer from './questions_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  topics: TopicsReducer,
  questions: QuestionsReducer
});

export default RootReducer;
