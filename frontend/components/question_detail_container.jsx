import { connect } from 'react-redux';
import { selectQuestion } from '../reducers/selectors';
import QuestionDetail from './question_detail';

// Actions
import { fetchQuestion, voteOnQuestion, followQuestion, unfollowQuestion } from '../actions/question_actions';

const mapStateToProps = (state, {match}) => {
  const questionId = parseInt(match.params.questionId);
  const question = selectQuestion(state, match.params.questionId);
  return {
    questionId,
    question
  }
};

const mapDispatchToProps = dispatch => ({
  requestQuestion: (id) => dispatch(fetchQuestion(id)),
  voteOnQuestion: (id, type) => dispatch(voteOnQuestion(id, type)),
  followQuestion: (id) => dispatch(followQuestion(id)),
  unfollowQuestion: (id) => dispatch(unfollowQuestion(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionDetail);
