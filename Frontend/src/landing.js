import React, {Component} from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import { userActions } from './actions';
class Landing extends Component {
    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        cookie.remove('cookie', { path: '/' });
        this.props.logout();
        alert('clear cookies');
    }
    render(){
        let navLogin = null;
        if(cookie.load('cookie')){
            navLogin = (
                // <Link to="/" onClick = {this.handleLogout}><i className="fa fa-sign-out"></i>Logout</Link>
                <a href="/" className="btn btn-primary" onClick = {this.handleLogout}><span>Logout</span><i className="fas fa-power-off"></i></a>
            );
        }else{
            navLogin = (
                <a href="/studentlogin" className="btn btn-dark"><span>go to login page</span><i className="fas fa-arrow-alt-circle-right"></i></a>
            )
        }
        return(
            <div className="float-right">
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
    logout: userActions.logout
};
const connectedLanding = connect(mapStatetoprops, actionCreators)(Landing);
export default connectedLanding;