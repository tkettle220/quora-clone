import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import TopicListContainer from './topic_list_container';
import CreateQuestionFormContainer from './create_question_form_container';

const App = () => (
  <div>
    <h1>Quera</h1>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
    <CreateQuestionFormContainer user={currentUser}/>
    <TopicListContainer />
  </div>
);

export default App;
