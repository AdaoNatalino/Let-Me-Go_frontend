import React from 'react'
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn"
import SignUp from "./SignUp"
import NotFound404 from "../NotFound404"


export default function Unauthorized ({ handlePostAuth }) {
    
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <SignIn
                handlePostAuth={handlePostAuth}
                />
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
            <Route path="*">
                <NotFound404 />
            </Route>
        </Switch>        
        </div>
    )
}
