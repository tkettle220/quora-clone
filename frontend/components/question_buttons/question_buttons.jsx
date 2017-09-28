import React from 'react';
import AnswerFormContainer from '../answer_form/answer_form_container';


class QuestionButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followed: false,
      downvoted: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  componentWillMount() {
    if(this.props.followed) {
      this.setState({followed: true});
    }
    if (this.props.downvoted) {
      this.setState({downvoted: true});
    }
  }


  handleClick() {
    if(this.state.followed) {
      this.props.unfollowQuestion(this.props.id);
      this.setState({followed: false});
    } else {
      this.props.followQuestion(this.props.id);
      this.setState({followed: true});
    }
  }

  //Extra feature: downvoting gives a popup that says the question has been downvoted and will be shown to fewer people
  handleDownvote() {
    if(this.state.downvoted) {
      this.props.voteOnQuestion(this.props.id, "cancel_vote");
      this.setState({downvoted: false});
    } else {
      this.props.voteOnQuestion(this.props.id, "downvote");
      this.setState({downvoted: true});
    }
  }


  render() {
    let followText = "Follow";
    let downvoteText = "Downvote";

    if(this.state.followed) {
      followText = "Following Question";
    }

    if(this.state.downvoted) {
      downvoteText = "Downvoted (undo)";
    }
    return(
      <div className="question-buttons">
        <AnswerFormContainer id={this.props.id} />
        <button className="link-button" onClick={this.handleClick}>
          <div >{followText} {this.props.followerIds.length}</div>
        </button>
        <button className="link-button" onClick={this.handleDownvote}>{downvoteText}
        </button>


      </div>
    );
  }
}

export default QuestionButtons;
