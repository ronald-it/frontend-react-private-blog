import React from "react";
import {NavLink} from "react-router-dom";

function Topmenu({authentication}) {
    return <nav className="navbar">
        <ul className="navbar-ul">

            <NavLink to="/" exact activeClassName="active-link">
                <li>Homepage</li>
            </NavLink>

            {authentication === true && <NavLink to="/blogposts" activeClassName="active-link">
                <li>Blogposts</li>
            </NavLink>}

            {authentication === false && <NavLink to="/login" activeClassName="active-link">
                <li>Login</li>
            </NavLink>}
        </ul>
    </nav>
}

export default Topmenu;