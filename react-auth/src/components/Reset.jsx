import React, { Component } from 'react'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate,

} from "react-router-dom";



import axios from 'axios';


export class Reset extends Component {

    state = {
        email: '',
        token: '',
        password: '',
        password_confirmation: '',
        message: ''
    }

    formSubmit = (e) => {
        e.preventDefault();
        const data = {
            token: this.state.token,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        }
        axios.post('/resetpassword', data)
            .then((response) => {
                console.log(response);
                this.setState({ message: response.data.message });
                document.getElementById('formSubmit').reset();

            })
            .catch((error) => {
                this.setState({ message: error.response.data.message });
            });
    }



    render() {
        let error = "";
        if (this.state.message && !this.state.status) {
            error = (
                <>
                    <div className='alert alert-danger' role="alert"> {this.state.message} </div>
                </>
            );
        }



        return (
            <div>
                <br />
                <br /><br />
                <div className='row'>
                    <div class="jumbotron col-lg-4 offset-lg-4" >
                        <h3 class="text-center">Reset Password</h3>
                        <form onSubmit={this.formSubmit} id="formSubmit">
                            {error}
                            <div class="form-group">
                                <label for="exampleInputEmail1">PinCode</label>
                                <input type="text" class="form-control" name="token" required onChange={(e) => this.setState({ token: e.target.value })} />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" name="email" required onChange={(e) => this.setState({ email: e.target.value })} />
                                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" name="password" required onChange={(e) => this.setState({ password: e.target.value })} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" class="form-control" name="password_confirmation" required onChange={(e) => this.setState({ password_confirmation: e.target.value })} />
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

export default Reset