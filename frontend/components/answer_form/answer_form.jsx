import React from 'react';

import ReactQuill from 'react-quill';


class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', open: false };
    this.handleChange = this.handleChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.successfulSubmit = this.successfulSubmit.bind(this);
  }

  handleChange(value) {
   this.setState({ text: value })
 }

 successfulSubmit({answer}) {
   this.props.history.push(`/answers/${answer.id}`);
 }

 submitAnswer() {
   this.props.createAnswer(this.state.text, this.props.questionId).then(
     this.successfulSubmit
   );
  }

  render () {
    if (this.state.open) {
      const author = this.props.current_user;
      return (
        <div className="answer-form-container">
          <button className="write-answer-button" onClick={()=>this.setState({open: true})}>Answer</button>
          <div className="answer-form">
            <div className="answer-header">
              <img src={author.pro_pic_url} alt={`${author.name}'s picture`}  className="answerer-pro-pic" />
              <div className="answer-details">
                <h1>{author.name}</h1>
              </div>
            </div>
            <ReactQuill value={this.state.text}
                        onChange={this.handleChange}
                        modules={modules}
                        placeholder={"Write your answer"}/>

            <div className="answer-form-footer">
              <button className="submit-button" onClick={()=>this.submitAnswer()}>Submit</button>
            </div>
          </div>
        </div>

      );
    } else {
      return (
        <button className="write-answer-button" onClick={()=>this.setState({open: true})}>Answer</button>
      );
    }

  }

}


const modules = {
  toolbar: [
    ["bold", "italic"], // toggled buttons
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["image", "link"] // misc
  ]
};

export default AnswerForm;
