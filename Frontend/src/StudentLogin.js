import React, {Component} from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import './loginform.css'
import { connect } from 'react-redux';
import { userActions } from './actions';
class StudentLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentmail : "",
            studentpassword : "",
            authflag : false
        }
        this.studentmailChangeHandler = this.studentmailChangeHandler.bind(this);
        this.studentpasswordChangeHandler = this.studentpasswordChangeHandler.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    handleLogout () {
        cookie.remove('cookie', { path: '/' })
    }
    studentpasswordChangeHandler(e) {
        this.setState({
            studentpassword : e.target.value
        });
    }
    studentmailChangeHandler(e) {
        this.setState({
            studentmail : e.target.value
        });
    }
    submitLogin(e) {
        e.preventDefault();
        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.studentmail.length === 0) alert('email field are required');
        else if (this.state.studentpassword.length === 0) alert('password field are required');
        else {
        if (reg.test(this.state.studentmail) === true) {
            const { studentmail, studentpassword } = this.state;
            this.props.login(studentmail, studentpassword);
        }else {
            alert('invalid email address');
        }
    }
    }
    render() {
        let navLogin = null;
        if (cookie.load('cookie')) {
            navLogin = (
                <div className="login-form">
                <div className="alert alert-success" role="alert">
                    <h4 className="alert-heading">Hello</h4>
                    <p>click below to sign into your account</p>
                    </div>
                    <div className="form-group">
                    <a href="/studentpage" className="btn btn-primary"><span>Login in with your account setting ?</span><i className="fas fa-arrow-alt-circle-right"></i></a>
                    </div>
                   <div className="form-group">
                   <i className='far fa-hand-point-right'></i>
                    <a href="/studentlogin" onClick={this.handleLogout}>Or log in using your account credentials</a>
                    </div>
                    </div>
            );
        }else {
            navLogin = (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Log in</h2>
                    <div className="form-group">
                        <input type="text" onChange={this.studentmailChangeHandler} className="form-control" placeholder="Username" required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" onChange={this.studentpasswordChangeHandler} className="form-control" placeholder="Password" required="required"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" onClick={this.submitLogin} className="btn btn-primary btn-block">Login in</button>
                        </div>
                </form>
                <p className="text-center"><a href="/signup">No account? Create here</a></p>
        </div>
        );
        }
        let redirectVar = null;
        if (this.props.loginauth === true) {
            redirectVar = <Redirect to= "/studentpage"/>
        }
        return (
            <div>
            {redirectVar}
            {navLogin}
            </div>
        )
    }
}

function mapStatetoprops(state) {
    const { loginauth } = state.userLogin;
    return { loginauth };
}

const actionCreators = {
    login: userActions.login
};
const connectedStudentLogin = connect(mapStatetoprops, actionCreators)(StudentLogin);
export default connectedStudentLogin;