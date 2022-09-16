import React, {useState} from 'react';
import './App.css';
import {
    Switch,
    Route,
} from 'react-router-dom';
import Homepage from "./components/Homepage";
import Loginpage from "./components/Loginpage";
import Overviewpage from "./components/Overviewpage";
import Blogpostpage from "./components/Blogpostpage";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Switch>
            <Route path="/">
                <Homepage/>
            </Route>
            <Route path="/login">
                <Loginpage/>
            </Route>
            <Route path="/blogposts">
                <Overviewpage/>
            </Route>
            <Route path="/blogposts/:blogId">
                <Blogpostpage/>
            </Route>
        </Switch>
    );
}

export default App;
