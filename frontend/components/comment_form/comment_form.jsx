import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', open: false };
    this.handleChange = this.handleChange.bind(this);
    this.submitComment = this.submitComment.bind(this);
    this.successfulSubmit = this.successfulSubmit.bind(this);
  }

  handleChange(e) {
   this.setState({ text: e.currentTarget.value })
 }

 successfulSubmit({comment}) {
   this.setState({text: ''})
  //  rerender or something?
  //  this.props.history.push(`/comments/${comment.id}`);
 }

//need to add args here
 submitComment() {
   this.props.createComment(this.props.commentableClass, this.props.commentableId, this.state.text).then(
     this.successfulSubmit
   );
  }

  render () {
    if (this.state.open) {
      return (
        <div className="comment-form">
          <input type="text" onChange={this.handleChange} value={this.state.text}></input>
          <button onClick={()=>this.submitComment()}>Submit</button>
        </div>
      );
    } else {
      return (
        <button onClick={()=>this.setState({open: true})}>Comment</button>
      );
    }

  }

}

export default CommentForm;
