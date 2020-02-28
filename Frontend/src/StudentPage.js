import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
class StudentPage extends Component {



    render() {
        let redirectVar = null;
        if (this.props.loginauth === false) {
            redirectVar = <Redirect to= "/studentlogin"/>
        }
        return (
            <div>
                {redirectVar}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand">Student Name</p>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active"><Link to="/studentpage/jobsearch" className="nav-link">JobSearch</Link></li>
                    <li className="nav-item"><Link to="/studentpage/studentprofile" className="nav-link">Profile</Link></li>
                    <li className="nav-item"><Link to="/studentpage/application" className="nav-link">Application</Link></li>
                    <li className="nav-item"><Link to="/studentpage/event" className="nav-link">Event</Link></li>
                    <li className="nav-item"><Link to="/studentpage/student" className="nav-link">Student tab</Link></li>
    </ul>
  </div>
        </nav>
        </div>
        );

    }

}

function mapStatetoprops(state) {
    const { loginauth } = state.userLogin;
    return { loginauth };
}
const connectedStudentPage = connect(mapStatetoprops)(StudentPage);
export default connectedStudentPage;