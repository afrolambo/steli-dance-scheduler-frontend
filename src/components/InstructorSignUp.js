import React from 'react'
import {ROOT} from '../constants'
import { Button, Form, Grid, Image, Message, Segment, Row} from 'semantic-ui-react'


class InstructorSignUp extends React.Component {
    state = {
        username: "",
        avatar: "", 
        email: "",
        fname: "", 
        lname: "",
        bio: "", 
        password: "", 
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(`${ROOT}/instructors`, {
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
        const { username, avatar, fname, lname, password, bio, email } = this.state
        
        return(
            <div>
            <form onSubmit ={this.handleSubmit}>
                <label>Username</label>
                <input type="text" name="username" autoComplete="off" value={username} onChange={this.handleChange} />

                <label>Profile Image</label>
                <input type="text" name="avatar" autoComplete="off" value={avatar} onChange={this.handleChange} />

                <img src={avatar.length ? avatar : "https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png"} alt={username} />

                <label>First Name</label>
                <input type="text" name="fname" autoComplete="off" value={fname} onChange={this.handleChange} />

                <label>Last Name</label>
                <input type="text" name="lname" autoComplete="off" value={lname} onChange={this.handleChange} />

                <label>E-mail</label>
                <input type="text" name="email" autoComplete="off" value={email} onChange={this.handleChange} />

                <label>Bio</label>
                <input type="text" name="bio" autoComplete="off" value={bio} onChange={this.handleChange} />

                <label>Password</label>
                <input type="text" name="password" autoComplete="off" value={password} onChange={this.handleChange} />
                
            </form>

            <Message>
                <a href='#' onClick={this.props.handleClick}> Sign Up </a> as New User
            </Message>
                
            </div>
        )
    }
}

export default InstructorSignUp