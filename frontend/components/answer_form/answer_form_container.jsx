import { connect } from 'react-redux';
import AnswerForm from './answer_form';

// Actions
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => ({
  questionId: ownProps.questionId
});

const mapDispatchToProps = dispatch => ({
  createAnswer: (body, questionId) => dispatch(createAnswer(body, questionId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm);
