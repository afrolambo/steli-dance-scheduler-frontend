import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <h5>NAVBAR</h5>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
                <li><Link to="/Schedule">Schedule</Link></li>
                <li><Link to="/AuthContainer">SignUp</Link></li>
            </ul>
            <hr />
        </div>
    )
}

export default NavBar