import React from 'react'
import {ROOT} from '../constants'
import { Button, Form, Grid, Image, Message, Segment, Row} from 'semantic-ui-react'

class UserSignUp extends React.Component {
    state = {
        username: "",
        fname: "", 
        lname: "",
        email: "",
        password: "", 
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${ROOT}/users`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(newUser => {
            this.props.handleLogin(newUser)
        })
    }

    render() {
        const { username, fname, lname, password, email } = this.state
        
        return(
            <div>
                <form onSubmit ={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" autoComplete="off" value={username} onChange={this.handleChange} />

                    <label>First Name</label>
                    <input type="text" name="fname" autoComplete="off" value={fname} onChange={this.handleChange} />

                    <label>Last Name</label>
                    <input type="text" name="lname" autoComplete="off" value={lname} onChange={this.handleChange} />

                    <label>email</label>
                    <input type="text" name="email" autoComplete="off" value={email} onChange={this.handleChange} />

                    <label>Password</label>
                    <input type="text" name="password" autoComplete="off" value={password} onChange={this.handleChange} />
                    
                </form>
            <Message>
                <a href='#' onClick={this.props.handleClick}> Sign Up </a> as Instructor
            </Message>
                
            </div>
        )
    }
}

export default UserSignUp