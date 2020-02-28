import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';

class Create extends Component{
    constructor(props){
        super(props);
        this.state = {
            BookID : "",
            Title : "",
            Author : "",
            authflag : true
        }
        this.BookIDChangehandler = this.BookIDChangehandler.bind(this);
        this.TitleChangehandler = this.TitleChangehandler.bind(this);
        this.AuthorChangehandler = this.AuthorChangehandler.bind(this);
        this.submitcreate = this.submitcreate.bind(this);
    }
    BookIDChangehandler = (e) => {
        this.setState({
            BookID : e.target.value
        });
    }
    TitleChangehandler = (e) => {
        this.setState({
            Title : e.target.value
        });
    }
    AuthorChangehandler = (e) => {
        this.setState({
            Author: e.target.value
        });
    }
    submitcreate = (e) => {
        e.preventDefault();
        const bookdata = {
            BookID : this.state.BookID,
            Title : this.state.Title,
            Author : this.state.Author
        }
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:3001/create',bookdata)
        .then(response => {
            this.setState({
                authflag : false
            });
            alert(JSON.stringify(response.data));
        });
    }
    render(){
        let redirectVar = null;
        if(cookie.load('cookie')){
            if (this.state.authflag == true)
                redirectVar = <Redirect to="/create"/>
            else 
                redirectVar = <Redirect to="/home"/>
        }else {
            redirectVar = <Redirect to="/login"/>
        }
        return(
            <div>
                {redirectVar}
                <br/>
                <div class="container">
                    <div class="create-form">
                    <div class="main-div">
                    <div class="panel">
                        <h2>Create a new book</h2>
                        <p>please type int BookID, Title and Author</p>
                        </div>
                    {/* <form action="http://127.0.0.1:3000/create" method="post"> */}
                        <div style={{width: '50%'}} class="form-group">
                            <input onChange = {this.BookIDChangehandler} type="text" class="form-control" name="BookID" placeholder="Book ID"/>
                        </div>
                        <br/>
                        <div style={{width: '50%'}} class="form-group">
                                <input onChange = {this.TitleChangehandler} type="text" class="form-control" name="Title" placeholder="Book Title"/>
                        </div>
                        <br/>
                        <div style={{width: '50%'}} class="form-group">
                                <input onChange = {this.AuthorChangehandler} type="text" class="form-control" name="Author" placeholder="Book Author"/>
                        </div>
                        <br/>
                        <div style={{width: '50%'}}>
                            <button onClick = {this.submitcreate} class="btn btn-success" type="submit">Create</button>
                        </div> 
                    {/* </form> */}
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Create;