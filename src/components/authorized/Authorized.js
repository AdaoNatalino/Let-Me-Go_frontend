import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";

import Profile from "./Profile"
import NotFound404 from "../NotFound404"
import ItemsContainer from './ItemsContainer';
import Home from "../unauthorized/UnauthorizedHome/Home"
import API from "../../API"
import AuthMenu from "./AuthMenu"


export default function Authorized ({ logOut, user }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.getAllItems().then(items => setItems(items))
    }, [])
   
    return (
        <>
            <AuthMenu 
            logOut={logOut}
            />
            <Switch>
                <Route exact path="/">
                    <Home
                    user={user}
                    />
                </Route>
                <Route exact path="/profile">
                    <Profile
                        user={user}
                        />
                </Route>
                <Route exact path="/items">
                    <ItemsContainer/>
                </Route>
                <Route path="*">
                    <NotFound404 />
                </Route>
            </Switch>  
        </>      
    )
    
}
