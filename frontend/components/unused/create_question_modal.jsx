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
    width                 : '623px'
  }
};

class CreateQuestionModal extends React.Component {
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
    const question = e.target.value ? e.target.value : "";
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
    debugger
    const {user} = this.props
    return (
      <div className="modal">

        <Modal
          class="create-question-modal"
          isOpen={this.state.createModalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={()=>this.closeModal("create")}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="user-pro-pic" />
        <span>{user.name} asks</span>
        <form className="ask-question-form" onSubmit={this.handleSubmit}>
          <input onChange={this.setQuestion} value={this.state.question}/>

          <input type="submit" value="Ask Question"/>

        </form>
          <button onClick={()=>this.closeModal("create")}>close</button>
        </Modal>


        <Modal
            class="notice-modal"
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

export default CreateQuestionModal
