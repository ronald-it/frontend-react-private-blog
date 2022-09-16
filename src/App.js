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
import Topmenu from "./components/Topmenu";
import blogArray from "./data/posts.json"

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Topmenu/>

            <Switch>
                <Route exact path="/">
                    <Homepage/>
                </Route>
                <Route path="/login">
                    <Loginpage/>
                </Route>
                <Route exact path="/blogposts">
                    <Overviewpage
                    blogArray={blogArray}
                    />
                </Route>
                <Route path="/blogposts/:blogId">
                    <Blogpostpage/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
