import React from 'react'
import { Switch, Route } from "react-router-dom";

import NotFound404 from "../NotFound404"
import ItemsContainer from './ItemsContainer';
import Home from "../HomeTheme/Home"
import AuthMenu from "./AuthMenu"
import NewItemForm from "./NewItemForm"
import DashBoard from "./Dashboard"
import EditProfile from "./EditProfile"
import EditItem from "./EditItem"
import AppFooter from '../AppFooter';

export default function Authorized ({ logOut, user, handlePostAuth }) {

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
                    <AppFooter/>
                </Route>
                <Route exact path="/newItem">
                    <NewItemForm
                    user={user}
                    />
                </Route>
                <Route exact path="/profile">
                    <DashBoard
                        logOut={logOut}
                        userInfo={user}
                        />
                </Route>
                <Route 
                    exact 
                    path="/items/:category" 
                    render={routerProps =>
                        <ItemsContainer {...routerProps}
                        user={user}
                        />
                    }
                />
                <Route 
                    exact 
                    path="/edit" 
                    render={routerProps =>
                        <EditProfile {...routerProps}
                        user={user}
                        handlePostAuth={handlePostAuth}
                        />
                    }
                />
                <Route 
                    exact 
                    path="/itemEdit/:id" 
                    render={routerProps =>
                        <EditItem {...routerProps}
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
