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
import PrivateRoute from "./components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <>
            <Topmenu/>

            <Switch>
                <Route exact path="/">
                    <Homepage
                        authentication={isAuthenticated}
                    />
                </Route>
                <Route path="/login">
                    <Loginpage
                        modifier={toggleIsAuthenticated}
                        authentication={isAuthenticated}
                    />
                </Route>
                <PrivateRoute
                    exact path="/blogposts"
                    auth={isAuthenticated}
                >
                    <Overviewpage
                        blogArray={blogArray}
                    />
                </PrivateRoute>
                <PrivateRoute
                    exact path="/blogposts/:blogId"
                    auth={isAuthenticated}
                >
                    <Blogpostpage/>
                </PrivateRoute>
            </Switch>
        </>
    );
}

export default App;
