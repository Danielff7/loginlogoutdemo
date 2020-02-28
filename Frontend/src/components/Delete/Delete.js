import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class Delete extends Component{
    constructor(props) {
        super(props);
        this.state = {
            BookID : "",
            authflag : true
        }
        this.BookIDChangehandler = this.BookIDChangehandler.bind(this);
        this.submitdelete = this.submitdelete.bind(this);
    }
    BookIDChangehandler = (e) => {
        this.setState({
            BookID : e.target.value
        });
    }
    submitdelete = (e) => {
        e.preventDefault();
        const bookdata = {
            BookID : this.state.BookID
        }
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/delete',bookdata)
        .then(response => {
            this.setState({
                authflag : false
            });
            alert(JSON.stringify(response.data));
        });
    }
    render(){
        let redirectVar = null;
        if (cookie.load('cookie')) {
            if (this.state.authflag === true)
                redirectVar = <Redirect to= "/delete"/>
            else 
                redirectVar = <Redirect to= "/home"/>
        }else {
            redirectVar = <Redirect to="/login"/>
        }
        return(
            <div class="container">
                {redirectVar}
                <form>
                    <div style={{width: "50%",float: "left"}} class="form-group">
                        <input onChange = {this.BookIDChangehandler} type="text" class="form-control" name="BookID" placeholder="Search a Book by Book ID"/>
                    </div>
                    <div style={{width: "50%", float: "right"}}>
                            <button onClick = {this.submitdelete} class="btn btn-success" type="submit">Delete</button>
                    </div> 
                </form>
            </div>
        )
    }
}

export default Delete;