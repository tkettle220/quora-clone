import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { customStyles } from '../create_question_form/create_question_form';
import QuestionSearchContainer from '../question_search/question_search_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props)

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
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(modalName) {
    let desiredState = {};
    desiredState[modalName+"ModalIsOpen"] = true;
    this.setState(desiredState);
  }


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
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
    const {user} = this.props
    return(
      <div className="nav-bar">
        <ul className="nav-bar-items">
          <li>Quera</li>

          <li>
            <Link to={`/`} activeClassName="active">Home</Link>
          </li>

          <li>
            <Link to={`/questions`} activeClassName="active">Answer</Link>
          </li>

          <li>

            <QuestionSearchContainer />
            </li>


          <li><button onClick={()=>this.openModal("create")}>Ask Question</button></li>


            <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="nav-pro-pic" />

          <li>
            <form name="sign-out" method="POST" action="/users/sign_out">
              <input type="hidden" name="_method" value="delete"/>
              <label>
                <input name="submit2" type="submit" id="submit2" value="Sign out" />
              </label>
            </form>

            </li>
        </ul>
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

export default NavBar;
