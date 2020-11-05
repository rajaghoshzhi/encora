
import React, { Component }from 'react';
import './Login.css';

class Login extends Component {
    render(){
        return (
            <div class="login-container">
               <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" id="username" aria-describedby="userHelp" />
                        <small id="userHelp" class="form-text text-muted">We'll never share your credentials with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default Login