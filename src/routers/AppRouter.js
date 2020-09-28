import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from "react-router-dom";
import { HomeScreen } from '../components/screens/HomeScreen';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    component={HomeScreen}
                />
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}
