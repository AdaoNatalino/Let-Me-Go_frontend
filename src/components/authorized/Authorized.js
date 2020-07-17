import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";

import Button from '@material-ui/core/Button';

import HomePage from "./HomePage"
import Profile from "./Profile"
import NotFound404 from "../NotFound404"
import ItemsContainer from './ItemsContainer';
import Oni from "./onepirate/Home"
import API from "../../API"


export default function Authorized ({ logOut }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.getAllItems().then(items => setItems(items))
    }, [])
   
    return (
        <Switch>
            <Route exact path="/">
                <Oni/>
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
            <Route exact path="/items">
                <ItemsContainer/>
            </Route>
            <Route path="*">
                <NotFound404 />
            </Route>
        </Switch>        
    )
    
}
