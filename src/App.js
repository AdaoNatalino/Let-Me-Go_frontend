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

 
  const handlePostAuth = (user) => user.error ? alert(user.error) : setUser(user)

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
          logOut={logOut}
          />
          : <Unauthorized
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
