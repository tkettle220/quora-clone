import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class CreateQuestionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const {user} = this.props
    return (
      <div>
        <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="user-pro-pic" />
        <span>{user.name}</span>
        <button onClick={this.openModal}>What is your question?</button>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

        <img src={user.pro_pic_url} alt={`${user.name}'s picture`}  className="user-pro-pic" />
        <span>{user.name} asks</span>
          <form>
            <input />

          </form>
          <button onClick={this.closeModal}>close</button>
          <button onClick={this.submitQuestion}>Ask Question</button>
        </Modal>
      </div>
    );
  }
}

export default CreateQuestionForm
