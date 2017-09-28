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
      return (
        <div>
          <button className="write-answer-button" onClick={()=>this.setState({open: true})}>Answer</button>
          <div className="answer-form">
            <ReactQuill value={this.state.text}
                        onChange={this.handleChange}
                        modules={modules}
                        placeholder={"Write your answer"}/>
            <button onClick={()=>this.submitAnswer()}>Submit</button>
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
