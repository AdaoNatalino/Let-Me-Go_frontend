import React, { useState, useEffect } from 'react'
import { Switch, Route } from "react-router-dom";

import NotFound404 from "../NotFound404"
import ItemsContainer from './ItemsContainer';
import Home from "../HomeTheme/Home"
import API from "../../API"
import AuthMenu from "./AuthMenu"
import NewItemForm from "./NewItemForm"
import DashBoard from "./Dashboard"
import EditProfile from "./EditProfile"


export default function Authorized ({ logOut, user }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.getAllItems().then(items => setItems(items))
    }, [])
   
    return (
        <>
            <AuthMenu
            user={user} 
            logOut={logOut}
            />
            <Switch>
                <Route exact path="/">
                    <Home
                    user={user}
                    />
                </Route>
                <Route exact path="/newItem">
                    <NewItemForm
                    user={user}
                    />
                </Route>
                <Route exact path="/profile">
                    <DashBoard
                        logOut={logOut}
                        user={user}
                        />
                </Route>
                <Route 
                    exact 
                    path="/items/:category" 
                    render={routerProps =>
                        <ItemsContainer {...routerProps}/>
                    }
                />
                <Route 
                    exact 
                    path="/edit" 
                    render={routerProps =>
                        <EditProfile {...routerProps}
                        user={user}
                        />
                    }
                />
                <Route path="*">
                    <NotFound404 />
                </Route>
               
            </Switch>  
        </>      
    )
    
}
