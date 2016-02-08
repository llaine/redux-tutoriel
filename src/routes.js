import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import {
  App,
  Home,
  About,
  Login,
  Register,
  NotFound
} from './containers/index';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="about" component={About} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
);