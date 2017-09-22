import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {fetchTopics} from './actions/topic_actions'

document.addEventListener('DOMContentLoaded', () => {
    if(window.currentUser === null) {
      window.location = "users/sign_in";
    } else {
      const store = configureStore();
      window.getState = store.getState;
      window.dispatch = store.dispatch;
      const root = document.getElementById('root');
      ReactDOM.render(<Root store={store} />, root);
    }
    delete window.currentUser;


});
