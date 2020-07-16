import React from 'react'
import { Switch, Route } from "react-router-dom";

import SignIn from "./SignIn"
import SignUp from "./SignUp"


export default function Unauthorized () {
    
    return (
        <div>
        <Switch>
            <Route exact path="/">
                <SignIn/>
            </Route>
            <Route exact path="/signup">
                <SignUp/>
            </Route>
        </Switch>        
        </div>
    )
}
