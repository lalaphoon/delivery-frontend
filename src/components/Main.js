import React from 'react';
import '../styles/Main.css'
import { Register } from "./Register"
import { Login } from "./Login"
import { User_status } from "./User_status"
import { Main1 } from "./Main1"
import { Main2 } from "./Main2"
import { Main3 } from "./Main3"
import { Track } from "./Track"
import { Switch, Route, Redirect } from "react-router-dom"

export function Main(props) {
    const getHome = () => {
        return props.isLoggedIn ? <User_status /> : <Redirect to={"/login"} />
    }

    const getLogin = () => {
        return props.isLoggedIn ? <Redirect to={"/user_status"} /> : <Login handleLogin={props.handleLogin} />
    }

    const getRegister = () => {
        return props.isLoggedIn ? <Redirect to={"/user_status"} /> : <Register />
    }

    const getRoot = () => {
        return props.isLoggedIn ? <Redirect to={"/user_status"} /> : <Redirect to={"/login"} />
    }

    return (
        <div className="main">
            <Switch>
                <Route path={"/login"} render={getLogin} />
                <Route path={"/register"} render={getRegister} />
                <Route path={"/user_status"} render={getHome} />
                <Route path={"/main1"} component={Main1} />
                <Route path={"/main2"} component={Main2} />
                <Route path={"/main3"} component={Main3} />
                <Route path={"/track"} component={Track} />
                <Route render={getRoot} />
            </Switch>
        </div>
    );
}
