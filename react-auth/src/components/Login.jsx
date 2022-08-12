import React, { Component } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";



import axios from 'axios';


class Login extends Component {


    state = {
        email: "",
        password: "",
        message: ""
    }

    formSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post('/login', data)
            .then((response) => {
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

        //After login redirect to profile
        if (this.state.loggedIn) {
            return <Navigate replace to="/profile" />;
        }


        return (
            <div>
                <br />
                <br /><br />
                <div className='row'>
                    <div class="jumbotron col-lg-4 offset-lg-4" >
                        <h3 class="text-center">Login Account</h3>
                        <form onSubmit={this.formSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" required onChange={(e) => this.setState({ email: e.target.value })} />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" required onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                            <br /><br />
                            Forget my password <Link to="/forget">Click Here</Link>
                            <br />
                            Don't have Acount?<Link to="/register">Click Here</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login