import React from 'react'
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import NotFound404 from "../NotFound404"
import Home from "./UnauthorizedHome/Home"


export default function Unauthorized ({ handlePostAuth, user }) {
    
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <Home
                user={user}
                />
            </Route>
            <Route exact path="/login">
                <SignIn
                handlePostAuth={handlePostAuth}
                />
            </Route>
            <Route exact path="/signup">
                <SignUp
                handlePostAuth={handlePostAuth}
                />
            </Route>
            <Route path="*">
                <NotFound404 />
            </Route>
        </Switch>        
        </div>
    )
}
