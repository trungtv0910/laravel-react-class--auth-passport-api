import React, { Component } from 'react'
import Nav from './Nav'

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Forget from '../components/Forget';
import Profile from '../components/Profile';
import axios from 'axios';
import Reset from '../components/Reset';


export class Header extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        //Login User Credentials
        axios.get('/user')
            .then((response) => {
                this.setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    setUser = (user) => {
        this.setState({ user: user })
    }



    render() {
        return (
            <>

                <BrowserRouter>
                    <Nav user={this.state.user} setUser={this.setUser} />
                    <Routes>
                        <Route path="/" element={<Home />}>  </Route>
                        <Route path="/login" element={<Login user={this.state.user} setUser={this.setUser} />}>  </Route>
                        <Route path="/register" element={<Register user={this.state.user} setUser={this.setUser} />}>  </Route>
                        <Route path="/forget" element={<Forget />}>  </Route>
                        <Route path="/reset/:id" element={<Reset />}>  </Route>
                        <Route path="/profile" element={<Profile user={this.state.user} />}>  </Route>


                    </Routes>
                </BrowserRouter>


            </>





        )




    }
}

export default Header