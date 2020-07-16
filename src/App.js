import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SignUp from "./components/SignUp"
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import Profile from "./components/Profile"


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/login">
            <SignIn/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/profile">
            <Profile/>
          </Route>
          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
