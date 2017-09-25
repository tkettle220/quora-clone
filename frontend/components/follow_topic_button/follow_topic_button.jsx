import React from 'react';


class FollowTopicButton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="follow-topic-button">
        <button onClick={()=>this.props.followTopic(this.props.id)}>Follow {this.props.followerIds}
        </button>
        <button onClick={()=>this.props.unfollowTopic(this.props.id)}>Unfollow
        </button>
      </div>
    );
  }
}

export default FollowTopicButton;
