import React from 'react';


class FollowTopicButton extends React.Component {
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
      this.props.followTopic(this.props.id);
      this.setState({followed: false});
    } else {
      this.props.unfollowTopic(this.props.id);
      this.setState({followed: true});
    }
  }


  render() {
    let followText = "Follow"
    if(this.state.followed) {
      followText = "Following Topic"
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

export default FollowTopicButton;
