import React from 'react';


class AnswerVoteButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      upvoted: false,
      downvoted: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if(this.props.upvoted) {
      this.setState({upvoted: true})
    }
    if(this.props.downvoted) {
      this.setState({downvoted: true})
    }
  }

  handleClick(type) {
    if(type === "upvote") {
      if(this.state.upvoted) {
        this.props.voteOnAnswer(this.props.id, "cancel_vote");
        this.setState({upvoted: false});
      } else {
        this.props.voteOnAnswer(this.props.id, "upvote");
        this.setState({upvoted: true, downvoted: false});
      }
    } else {
      if(this.state.downvoted) {
        this.props.voteOnAnswer(this.props.id, "cancel_vote");
        this.setState({downvoted: false});
      } else {
        this.props.voteOnAnswer(this.props.id, "downvote");
        this.setState({downvoted: true, upvoted: false});
      }
    }
  }



  render() {
    let upvoteText = 'Upvote';
    let downvoteText = 'Downvote';
    if(this.state.upvoted) {
      upvoteText = 'Upvoted';
    }
    if(this.state.downvoted) {
      downvoteText = 'Downvoted';
    }

    return (
      <div className="vote-buttons">
        <button className="upvote-button" onClick={()=>this.handleClick("upvote")}>
          <div className="upvote-text">{upvoteText}</div>
          <div className="upvoters">{this.props.upvoterIds.length}</div>
        </button>

        <button className="downvote-button" onClick={()=>this.handleClick("downvote")}>{downvoteText}</button>
      </div>
    );

  }
}

export default AnswerVoteButton;
