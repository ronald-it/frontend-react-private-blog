import React from "react";
import {Link} from 'react-router-dom';

function Loginpage({modifier, authentication}) {

    console.log(authentication);

    function handleClick() {
        modifier(true);
    }

    return <Link to="/">
        <button
            type="button"
            onClick={handleClick}
        >
            Inloggen
        </button>
    </Link>
}

export default Loginpage;