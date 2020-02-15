import React from 'react';
import {Icon} from "antd"
import '../styles/TopBar.css'
import logo from '../assets/images/logo.png';

export function TopBar(props) {

    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className={"App-title"}>Delivery</h1>
            {
                props.isLoggedIn ?
                    <a onClick={props.handleLogout} className={"logout"}>
                        <Icon type={"logout"} />
                        {' '}Logout
                    </a> :
                    null
            }
        </header>
    );

}
