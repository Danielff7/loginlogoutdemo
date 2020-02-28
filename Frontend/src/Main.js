import React, {Component} from 'react';
import {Route} from 'react-router-dom';
// import Mainlogin from './component/Mainlogin'
import StudentLogin from './StudentLogin'
import StudentPage from './StudentPage'
import Landing from './landing'
// import JobSearch from './component/JobSearch'
class Main extends Component {
    render(){
        return(
            <div>
                {/*Render Different Component based on Route*/}
                <Route path="/" component={Landing}/>
                {/* <Route path="/mainlogin" component={Mainlogin}/> */}
                <Route path="/studentlogin" component={StudentLogin}/>
                <Route path="/studentpage" component={StudentPage}/>
                {/* <Route path="/studentpage/jobsearch" component={JobSearch}/> */}
                {/* <Route path="/delete" component={Delete}/>
                <Route path="/create" component={Create}/>
                <Route path="/mainlogin" component={mainlogin}/> */}
            </div>
        )
    }
}
//Export The Main Component
export default Main;