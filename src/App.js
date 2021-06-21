import React from 'react';
import { BrowserRouter as BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import LoginPage from './components/pages/LoginPage/LoginPage';
import SignInPage from './components/pages/SignUpPage/SignUpPage';
import Nav from './components/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
