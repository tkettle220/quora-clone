import React from 'react';


class FollowTopicButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      followed: false,
      disabled: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    if(this.props.followed) {
      this.setState({followed: true});
    }
  }

  handleSuccess(followed) {
    this.setState({followed: followed, disabled: false});
  }


  handleClick() {
    this.setState({disabled: true})
    if(this.state.followed) {
      this.props.unfollowTopic(this.props.id).then(()=>this.handleSuccess(false));
    } else {
      this.props.followTopic(this.props.id).then(()=>this.handleSuccess(true));
    }
  }


  render() {
    let followText = "Follow"
    if(this.state.followed) {
      followText = "Following Topic"
    }
    return(

        <button className="follow-button" onClick={this.handleClick} disabled={this.state.disabled}>
          <div className="follow-text">{followText}</div>
          <div className="followers">{this.props.followerIds.length}</div>
        </button>

    );
  }
}

export default FollowTopicButton;
