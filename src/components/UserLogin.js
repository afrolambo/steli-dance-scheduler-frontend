import React from 'react';
import { Button, Form, Grid, Header, Message, Segment, Row} from 'semantic-ui-react'

class Login extends React.Component {
    state = {
        username: "", 
        password: ""
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state)
    }

    render() {
        return (
            <>
            <Grid textAlign='top-center' style={{ height: `100vh` }} verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column style={{maxWidth: 600}}  >

                        <div className="column twelve wide">
                            <Form size='large' style={{maxWidth: 600}} onSubmit={this.submitHandler} className="column twelve wide">
                                    <Segment stacked>
                                        <div>
                                            <h3>username</h3>
                                            <input className="field" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.changeHandler} />
                                        </div>
                                        <div>
                                            <h3>password</h3>
                                            <input className="field" type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                                        </div>
                                        <br/>
                                        <Button size="large" type="submit" value="Login">Login</Button>
                                </Segment>
                            </Form>
                            <Message>
                                Login is  <a href='#' onClick={this.props.handleClick}> Instructor</a> ?
                            </Message>
                        </div>

                    </Grid.Column>
                </Grid.Row> 
            </Grid>
            </>
        )
    }
}

export default Login;