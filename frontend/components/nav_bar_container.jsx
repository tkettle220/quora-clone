import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Actions

const mapStateToProps = (state, ownProps) => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
