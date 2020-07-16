import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SignUp from "./components/SignUp"
import SignIn from './components/SignIn';
import HomePage from './components/HomePage';
import Profile from "./components/Profile"

import API from './API'
import './App.css';

function App() {

  const [user, setUser] = useState(null)
  
  // useEffect(() => {
  //   if (localStorage.getItem('jwt')) API.validateToken().then(handlePostAuth)
  // }, [])

  const handlePostAuth = (user) => {
    if (user.error) {
      alert(user.error)
    } else {
      setUser(user)
    }
  }
  
  // return user
  // ? <AuthorisedApplication >

  //   </AuthorisedApplication>
  // : <LoginSignUpContainer />

  return (
    <div className="App">
      <Router>
        <Switch>
          {
            user
            ? <>
              <Route exact path="/">
                <HomePage/>
              </Route>
              <Route exact path="/profile">
                <Profile user={user}/>
              </Route>
            </>
            : <>
              <Route exact path="/">
                <SignIn/>
              </Route>
              <Route exact path="/signup">
                <SignUp/>
              </Route>
            </>
          }
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const NotFound404 = () => {
  return <h4>404 Not Found: The page you are trying to access does not exist</h4>
}

export default App;
