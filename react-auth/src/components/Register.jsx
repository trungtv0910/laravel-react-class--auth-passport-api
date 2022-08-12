import axios from 'axios';
import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
class Register extends Component {

    state = {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
        message: ""
    }
    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password,
            name: this.state.username,
            password_confirmation: this.state.password_confirmation
        }
        axios.post('/register', data)
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.token);
                this.setState({
                    loggedIn: true
                })
                this.props.setUser(response.data.user);
            })
            .catch((error) => {
                console.log(error);
            });






    }

    render() {
        // After Register Redirect To Profile 
        if (this.state.loggedIn) {
            return <Navigate replace to="/profile" />;
        }


        return (
            <div>
                <br />
                <br /><br />
                <div className='row'>
                    <div class="jumbotron col-lg-4 offset-lg-4" >
                        <h3 class="text-center">Register Account</h3>
                        <form onSubmit={this.formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">User name</label>
                                <input type="text" class="form-control" name="username" onChange={(e) => this.setState({ username: e.target.value })} required />

                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" onChange={(e) => this.setState({ email: e.target.value })} required />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" onChange={(e) => this.setState({ password: e.target.value })} required />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" class="form-control" name="password_confirmation" onChange={(e) => this.setState({ password_confirmation: e.target.value })} required />
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                            <br /><br />
                            Have an Account <Link to="/login">Login Here</Link>
                            <br />
                            Forget my password <Link to="/forget">Click Here</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register