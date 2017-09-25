import { connect } from 'react-redux';
import { selectQuestion } from '../../reducers/selectors';
import QuestionItem from './question_item';

// Actions
import { fetchQuestion } from '../../actions/question_actions';

const mapStateToProps = (state, ownProps) => ({
  question: selectQuestion(state, ownProps.id),
  id: ownProps.id,
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  requestQuestion: (id) => dispatch(fetchQuestion(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionItem);
