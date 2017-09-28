import { connect } from 'react-redux';
import AnswerForm from './answer_form';

import { withRouter } from 'react-router-dom';

// Actions
import { createAnswer } from '../../actions/answer_actions';

const mapStateToProps = (state, ownProps) => ({
  questionId: ownProps.questionId,
  current_user: state.session.currentUser

});

const mapDispatchToProps = dispatch => ({
  createAnswer: (body, questionId) => dispatch(createAnswer(body, questionId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerForm));
