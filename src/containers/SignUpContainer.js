import React from 'react'
import UserSignUp from '../components/UserSignUp'
import InstructorSignUp from '../components/UserSignUp'


class SignUpContainer extends React.Component {
    state = {
        newUser: false
    }

    handleClick = () => {
        this.setState({
            newUser: !this.state.newUser
        })
    }

    render(){
        return (
            <div>
                <h1>Sign Up</h1>
                { this.state.newUser ? 
                <UserSignUp 
                    loginHandler={this.props.loginHandler}
                    handleClick={this.handleClick}
                    />
                    :
                <InstructorSignUp 
                    loginHandler={this.props.loginHandler}
                    handleClick={this.handleClick}
                    />
                }
            </div>
        )
    }
}

export default SignUpContainer