import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

export const customStyles = {
  content : {
    top                   : '15%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width                 : '623px',
    padding : '0'  }
};

class CreateQuestionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      createModalIsOpen: false,
      successModalIsOpen: false,
      question: "",
      asked_question: {}
    };

    this.setQuestion = this.setQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSuccessfulSubmit = this.handleSuccessfulSubmit.bind(this);

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalName) {
    let desiredState = {};
    desiredState[modalName+"ModalIsOpen"] = true;
    this.setState(desiredState);
  }

  afterOpenModal(modalName) {
    // references are now sync'd and can be accessed.
    // this.background.style.color = 'white';
  }

  closeModal(modalName) {
    let desiredState = {};
    desiredState[modalName+"ModalIsOpen"] = false;
    this.setState(desiredState);
  }

  setQuestion(e) {
    let question = e.target.value ? e.target.value : "";
    this.setState({ question });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createQuestion(this.state.question).then(
      question => this.handleSuccessfulSubmit(question.question)
    );
  }

  handleSuccessfulSubmit(question) {
    this.closeModal("create");
    this.setState({asked_question: question})
    this.openModal("success")
  }

  render() {
    const {user} = this.props
    return (
      <div className="greeting">
        <div className="greeting-header">
          <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="user-pro-pic" />
          <span>{user.name}</span>
        </div>

        <button onClick={()=>this.openModal("create")}>What is your question?</button>

        <Modal
          isOpen={this.state.createModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={()=>this.closeModal("create")}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <div className="question-modal-header">
          <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="user-pro-pic" />
          <span id="modal-username">{user.name} asks</span>
        </div>


        <input onChange={this.setQuestion} placeholder="What is your question?" value={this.state.question}/>

        <div className="question-modal-footer">
          <button id="cancel-button" onClick={()=>this.closeModal("create")}>Cancel</button>
          <button id="ask-question-button" onClick={this.handleSubmit}>Ask Question</button>
        </div>
        </Modal>


        <Modal
            isOpen={this.state.successModalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={()=>this.closeModal("success")}
            style={customStyles}
            contentLabel="Example Modal"
          >
          <span>You asked {this.state.asked_question.body}</span>
          <button onClick={()=>this.closeModal("success")}>close</button>
          </Modal>
      </div>
    );
  }
}

export default CreateQuestionForm
