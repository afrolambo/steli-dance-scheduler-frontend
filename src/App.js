import React from 'react';
import {Home} from './views/Home'
import {About} from './views/About'
import {Cart} from './views/Cart'
import {NoMatch} from './views/NoMatch'
import {Schedule} from './views/Schedule'
import NavBar from './components/Navbar'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/Home' component={Home} />
        <Route exact path='/'>
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/Cart" component={Cart} />
        <Route exact path="/Schedule" component={Schedule} />
        <Route component={NoMatch}/>
      </Switch>
    </div>
  );
}

export default App;
