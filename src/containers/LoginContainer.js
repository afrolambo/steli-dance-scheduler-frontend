import React from 'react'
import UserLogin from '../components/UserLogin'
import InstructorLogin from '../components/UserLogin'
import { Button, Form, Grid, Header, Message, Segment, Row} from 'semantic-ui-react'



class LoginContainer extends React.Component {
    state = {
        isUser: true
    }

    handleClick = () => {
        this.setState({
            isUser: !this.state.isUser
        })
    }

    render(){
        console.log(this.state.isUser)
        return (
            <div>
                <h1>Login</h1>
                { this.state.newUser ? 
                <UserLogin 
                    loginHandler={this.props.loginHandler}
                    handleClick={this.handleClick}
                    />
                    :
                <InstructorLogin 
                    loginHandler={this.props.loginHandler}
                    handleClick={this.handleClick}
                    />
                }
                <Message>
                    Don't have an account? <a href='#' onClick={this.props.handleClick}> Sign Up</a>
                </Message>
            </div>
        )
    }
}

export default LoginContainer