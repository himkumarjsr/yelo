import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App/App';
import HomePage from './components/HomePage/HomePage';
import PostPage from './components/PostPage/PostPage';
import AddEmployer from './components/AddEmployerPage/AddEmployerPage';
import AddBranch from './components/AddBranch/AddBranch';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/post/:postID" component={PostPage} />
    <Route path="/addEmployer" component={AddEmployer} />
    <Route path="/addBranch" component={AddBranch} />
  </Route>
);
