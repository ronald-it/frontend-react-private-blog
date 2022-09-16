import React from "react";
import {NavLink} from "react-router-dom";

function Topmenu() {
    return <nav className="navbar">
        <ul className="navbar-ul">

            <NavLink to="/" exact activeClassName="active-link">
                <li>Homepage</li>
            </NavLink>

            <NavLink to="/blogposts" activeClassName="active-link">
                <li>Blogposts</li>
            </NavLink>

            <NavLink to="/login" activeClassName="active-link">
                <li>Login</li>
            </NavLink>

        </ul>
    </nav>
}

export default Topmenu;