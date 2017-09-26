import React from 'react';

import ReactQuill from 'react-quill';


class AnswerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  handleChange(value) {
   this.setState({ text: value })
 }

 submitAnswer() {
   this.props.createAnswer(this.state.text, this.props.questionId);
   //should then take you to the show page for the answer you just created
 }

  render () {
    return (
      <div className="answer-form">
        <ReactQuill value={this.state.text}
                    onChange={this.handleChange}
                    modules={modules}
                    placeholder={"Write your answer"}/>
        <button onClick={()=>this.submitAnswer()}>Submit</button>
      </div>
    );
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
