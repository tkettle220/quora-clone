import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchTopics, fetchTopic} from './actions/topic_actions';
import {fetchQuestions, fetchQuestion, voteOnQuestion, followQuestion, unfollowQuestion} from './actions/question_actions';
import {fetchQuestionAnswers, fetchAnswer} from './actions/answer_actions';
import {receiveCurrentUser} from './actions/session_actions';
import {updateFilter} from './actions/filter_actions';
import {asSortedArray} from './reducers/selectors';
import {createComment} from './actions/comment_actions';

document.addEventListener('DOMContentLoaded', () => {
    if(window.currentUser === null) {
      window.location = "users/sign_in";
    } else {
      const store = configureStore();
      window.getState = store.getState;
      window.dispatch = store.dispatch;
      dispatch(receiveCurrentUser(window.currentUser));

      const root = document.getElementById('root');
      ReactDOM.render(<Root store={store} />, root);
    }
    delete window.currentUser;
});

//remove these after dev, this is just for testing
window.fetchTopic = fetchTopic;
window.fetchQuestion = fetchQuestion;
window.fetchQuestions = fetchQuestions;
window.fetchQuestionAnswers = fetchQuestionAnswers;
window.fetchAnswer = fetchAnswer;
window.updateFilter = updateFilter;
window.asSortedArray = asSortedArray;
window.createComment = createComment;
// window.voteOnQuestion = voteOnQuestion;
// window.followQuestion = followQuestion;
// window.unfollowQuestion = unfollowQuestion;
