import { connect } from 'react-redux';
import { selectAnswer } from '../../reducers/selectors';
import AnswerDetail from './answer_detail';

// Actions
import { fetchAnswer, voteOnAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, {match}) => {
  const id = parseInt(match.params.answerId);
  const answer = selectAnswer(state, match.params.answerId);
  return {
    id,
    answer
  }
};

const mapDispatchToProps = dispatch => ({
  requestAnswer: (id) => dispatch(fetchAnswer(id)),
  voteOnAnswer: (id, type) => dispatch(voteOnAnswer(id, type))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerDetail);
