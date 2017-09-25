import { connect } from 'react-redux';
import { allQuestions } from '../../reducers/selectors';
import QuestionList from './question_list';

// Actions
import { fetchQuestions } from '../../actions/question_actions';

const mapStateToProps = state => ({
  questions: allQuestions(state),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestQuestions: () => dispatch(fetchQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionList);
