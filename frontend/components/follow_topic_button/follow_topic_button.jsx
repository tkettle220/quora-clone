import React from 'react';


class FollowTopicButton {
  constructor(props) {
    super(props)
  }

  render() {
    <button onClick={()=>this.props.voteOnAnswer(this.props.id, "upvote")}>Upvote {upvoter_ids}
    </button>
    <button onClick={()=>this.props.voteOnAnswer(this.props.id, "cancel_vote")}>Undo Vote
    </button>
    <button onClick={()=>this.props.voteOnAnswer(this.props.id, "downvote")}>Downvote</button>
  }
}

export default FollowTopicButton;
