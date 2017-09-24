import { connect } from 'react-redux';
import NavBar from './nav_bar';

import { createQuestion } from '../actions/question_actions';

// Actions

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createQuestion: (body) => dispatch(createQuestion(body))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
