import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
