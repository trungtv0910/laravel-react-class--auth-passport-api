import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Forget extends Component {
    state = {
        email: '',
        message: '',
        status: false
    }


    formSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: this.state.email
        }
        axios.post('/forgetpassword', data)
            .then((response) => {
                this.setState({ message: response.data.message, status: true });
                document.getElementById('forgetform').reset();
            })
            .catch((error) => {
                this.setState({ message: error.response.data.message, status: false });
            });
    }


    render() {

        let error = "", success = "";
        if (this.state.message && !this.state.status) {
            error = (
                <>
                    <div className='alert alert-danger' role="alert"> {this.state.message} </div>
                </>
            );
        }
        if (this.state.message && this.state.status) {
            success = (
                <div className='alert alert-success' role="alert"> {this.state.message} </div>
            );
        }





        return (
            <div>
                <br />
                <br /><br />
                <div className='row'>
                    <div class="jumbotron col-lg-4 offset-lg-4" >
                        <h3 class="text-center">Forget Password</h3>
                        <form onSubmit={this.formSubmit} id="forgetform">
                            {error} {success}
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" onChange={(e) => this.setState({ email: e.target.value })} />
                                <small id="emailHelp" class="form-text text-muted"> {this.state.message}</small>
                            </div>

                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                            <br /><br />
                            Have an Account? <Link to="/login">Login Here</Link>
                            <br />
                            Don't have Acount?<Link to="/register">Click Here</Link>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forget