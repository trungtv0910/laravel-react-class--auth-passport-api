import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

export class Nav extends Component {
    render() {
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
                            <Link className="nav-link" to="/profile">Profile</Link>
                        </li>


                    </ul>
                    <ul className=" my-2 my-lg-0  navbar-nav ">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/logout">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Nav