import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Forget extends Component {
    render() {
        return (
            <div>
                <br />
                <br /><br />
                <div className='row'>
                    <div class="jumbotron col-lg-4 offset-lg-4" >
                        <h3 class="text-center">Forget Password</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

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