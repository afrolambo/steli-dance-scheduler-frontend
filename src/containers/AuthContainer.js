import React from 'react'
import LoginContainer from './LoginContainer'
import SignUpContainer from './SignUpContainer'
import {Link} from 'react-router-dom'
import { Grid, Image, Message, Segment, Button} from 'semantic-ui-react'

class AuthContainer extends React.Component {
    state = {
        newUser: false
    }

    handleClick = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render() {
        // console.log(this.props.user)
        return (
            <> 
                {this.state.newUser ? 

                    <SignUpContainer
                        submitHandler={this.props.loginHandler} 
                        handleClick={this.handleClick}
                    />
                :

                    <LoginContainer
                        submitHandler={this.props.signupHandler} 
                        handleClick={this.handleClick}
                    />
                    
                } 
            </>
        )
    }
}

export default AuthContainer