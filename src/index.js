import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './firebase';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignUp from './components/auth/SignUp'
import Login from './components/auth/Login'
import 'semantic-ui-css/semantic.min.css'

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

