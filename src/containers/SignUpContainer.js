import React from 'react'
import UserSignUp from '../components/UserSignUp'
import InstructorSignUp from '../components/UserSignUp'
import { Button, Form, Grid, Header, Message, Segment, Row} from 'semantic-ui-react'



class SignUpContainer extends React.Component {
    state = {
        instructor: true
    }

    handleClick = () => {
        this.setState({
            instructor: !this.state.instructor
        })
    }

    render(){
        console.log(this.state.instructor)
        return (
            <div>
                { this.state.instructor ? 
                <>
                    <h1>Sign Up</h1>
                    <InstructorSignUp 
                        loginHandler={this.props.loginHandler}
                        handleClick={this.handleClick}
                        />
                </>
                    :
                <>
                    <h1>Create Account</h1>
                    <UserSignUp 
                        loginHandler={this.props.loginHandler}
                        handleClick={this.handleClick}
                        />
                </>

                }
                <Message>
                    Already have an account? <a href='#' onClick={this.props.handleClick}> Login </a>
                </Message>
            </div>
        )
    }
}

export default SignUpContainer