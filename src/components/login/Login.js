import React, { Component }from 'react';
import './Login.css';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
class Login extends Component {


    
    render(){

        return (
            <div className="login-container">
               <form>
                    <div className="form-group">
                        <label >Username</label>
                        <input type="text" className="form-control" id="username" value={this.props.uname} onChange={this.props.userHandler}  aria-describedby="userHelp" />
                        <small id="userHelp" className="form-text text-muted">We'll never share your credentials with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input type="password" className="form-control" value={this.props.pwd} onChange={this.props.passHandler} id="password" />
                    </div>
                    
                    <button type="button" className="btn btn-primary" onClick={this.props.loginHandler}>Log In</button>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        redirection: state.redirect,
        uname:state.username,
        pwd:state.password
    }
}
const mapDispatchToProps =(dispatch)=>{
    return {
        userHandler: (e)=> dispatch({type:'USERNAME',payload:e.target.value}),
        passHandler: (e)=> dispatch({type:'PASSWORD',payload:e.target.value}),
        loginHandler: ()=> dispatch({type:'USER_LOGIN'})
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));