import React from 'react';
import Modal from 'react-modal';
import { customStyles } from './create_question_form';


import QuestionSearchInput from './question_search_input';
import QuestionSearchItem from './question_search_item';

const appElement = document.getElementById('main-page');
console.log("did this work");
Modal.setAppElement(appElement);

class QuestionSearch extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      searchModalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({searchModalIsOpen: true});
  }


  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({searchModalIsOpen: false});
  }

  render() {
    const {questions, query, updateFilter} = this.props
    const QuestionItems = questions.map(question => (
      <QuestionSearchItem question={question}/>
    ));

    return (
      <div className="question-search">
        <QuestionSearchInput
          className="search-input"
          query={query}
          updateFilter={updateFilter}
          openModal={this.openModal}
        />

        <ul className="question-search-list">
           {QuestionItems}
        </ul>
      </div>
    );

  }
}


export default QuestionSearch;
