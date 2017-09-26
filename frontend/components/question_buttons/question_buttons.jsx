import React from 'react';


class QuestionButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followed: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if(this.props.followed) {
      this.setState({followed: true});
    }
  }


  handleClick() {
    if(this.state.followed) {
      this.props.followQuestion(this.props.id);
      this.setState({followed: false});
    } else {
      this.props.unfollowQuestion(this.props.id);
      this.setState({followed: true});
    }
  }


  render() {
    let followText = "Follow"
    if(this.state.followed) {
      followText = "Following Question"
    }
    return(
      <div className="follow-topic-button">
        <button onClick={this.handleClick}>
          <div>{followText}</div>
          <div>{this.props.followerIds.length}</div>
        </button>

      </div>
    );
  }
}

export default QuestionButtons;
