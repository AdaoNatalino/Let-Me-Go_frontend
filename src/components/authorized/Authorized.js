import React from 'react'
import { Switch, Route } from "react-router-dom";

import Button from '@material-ui/core/Button';


import HomePage from "./HomePage"
import Profile from "./Profile"


export default function Authorized ({ logOut }) {
   
    return (
        <Switch>
            <Route exact path="/">
                <HomePage/>
                <Button   
                    onClick={logOut}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Log out
                </Button>
            </Route>
            <Route exact path="/profile">
                <Profile
                    // user={user}
                    />
            </Route>
        </Switch>        
    )
    
}
