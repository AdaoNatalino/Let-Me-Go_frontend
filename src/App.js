import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Authorized from './components/authorized/Authorized';
import Unauthorized from './components/unauthorized/Unauthorized';
import NotFound404 from "./components/NotFound404"

import API from './API'
import './App.css';

function App() {

  const [user, setUser] = useState(null)
  
  useEffect(() => {
    if (localStorage.getItem('jwt')) 
    API.validateToken().then(user => handlePostAuth(user))
  }, [])

 
  const handlePostAuth = (userInfo) => {
    if (userInfo.error) {
      alert(userInfo.error)
    } else {
      setUser(userInfo.user)
      if (userInfo.jwt) localStorage.setItem('jwt', userInfo.jwt)
    } 
  }

  const logOut = () => {
    localStorage.removeItem("jwt");
    setUser(null)
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          { user
          ? <Authorized 
            user={user}
            logOut={logOut}
          />
          : <Unauthorized
            handlePostAuth={handlePostAuth}
          /> 
        }
          <Route path="*">
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


export default App;
