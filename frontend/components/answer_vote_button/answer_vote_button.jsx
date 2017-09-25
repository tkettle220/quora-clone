import React from 'react';


class AnswerVoteButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="answer-vote-buttons">
        <button onClick={()=>this.props.voteOnAnswer(this.props.id, "upvote")}>Upvote {this.props.upvoterIds}
        </button>
        <button onClick={()=>this.props.voteOnAnswer(this.props.id, "cancel_vote")}>Undo Vote
        </button>
        <button onClick={()=>this.props.voteOnAnswer(this.props.id, "downvote")}>Downvote</button>
      </div>
    );

  }
}

export default AnswerVoteButton;
