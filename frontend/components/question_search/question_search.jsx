import React from 'react';


import QuestionSearchInput from './question_search_input';
import QuestionSearchItem from './question_search_item';


class QuestionSearch extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {questions, query, updateFilter} = this.props
    const QuestionItems = questions.map(question => (
      <QuestionSearchItem question={question} updateFilter={updateFilter} />
    ));

    return (
      <div className="question-search">
        <QuestionSearchInput
          className="search-input"
          query={query}
          updateFilter={updateFilter}
        />

        <ul className="question-search-list">
           {QuestionItems}
        </ul>
      </div>
    );

  }
}


export default QuestionSearch;
