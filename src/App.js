import React from 'react';
import {Home} from './views/Home'
import {About} from './views/About'
import {Cart} from './views/Cart'
import {NoMatch} from './views/NoMatch'
import {Schedule} from './views/Schedule'
import SignUpContainer from './containers/SignUpContainer'
import NavBar from './components/Navbar'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';


class App extends React.Component {
  state = {
    currentUser: null
  }

  handleLogin = currentUser => {
    this.setState({ currentUser }, () => {
      this.props.history.push('/home')
    })
  }
  
  render() {

    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/Home' component={Home} />
          <Route exact path='/'>
            <Redirect to="/Home" />
          </Route>
          <Route path="/SignUpContainer">
            <SignUpContainer handleLogin={this.handleLogin} />
          </Route>
          <Route exact path="/About" component={About} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Schedule" component={Schedule} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

export default App;
