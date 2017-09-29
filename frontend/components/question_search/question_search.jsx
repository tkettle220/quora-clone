import React from 'react';


import QuestionSearchInput from './question_search_input';
import QuestionSearchItem from './question_search_item';


class QuestionSearch extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {questions, query, updateFilter} = this.props
    //fetch only 10 search results
    const fewerQuestions = questions.slice(0,10);
    const QuestionItems = fewerQuestions.map(question => (
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
