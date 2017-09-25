import {combineReducers} from 'redux';

import ErrorsReducer from './errors_reducer';
import SessionReducer from './session_reducer';
import TopicsReducer from './topics_reducer';
import QuestionsReducer from './questions_reducer';
import SearchQuestionsReducer from './search_questions_reducer';
import AnswersReducer from './answers_reducer';
import FiltersReducer from './filters_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  topics: TopicsReducer,
  questions: QuestionsReducer,
  answers: AnswersReducer,
  filters: FiltersReducer,
  searchQuestions: SearchQuestionsReducer
});

export default RootReducer;
