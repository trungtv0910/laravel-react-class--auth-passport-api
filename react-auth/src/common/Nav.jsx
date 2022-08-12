import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

export class Nav extends Component {
    state = {
        loggedout: '',

    }

    logout = () => {

        localStorage.clear();
        this.props.setUser(null);


    }

    render() {
        let buttons;
        let profile;

        if (localStorage.getItem('token')) {
            buttons = (
                <div>
                    <Link className="nav-link" to="/" onClick={this.logout}>Logout</Link>
                </div>
            );
            profile = (
                <div>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </div>
            );
        } else {
            buttons = (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                </>
            )
        }

        // if (this.state.loggedout) {
        //     //After logout redirect to login
        //     return <Navigate replace to="/login" />;
        // }




        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/">home</Link>
                        </li>

                        <li className="nav-item">
                            {profile}
                        </li>


                    </ul>
                    <ul className=" my-2 my-lg-0  navbar-nav ">
                        {buttons}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav