import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from '../screens/Dashboard';
import Header from '../features/Header';
import Footer from '../components/Footer';
import Constants from '../utils/constants';

class Routes extends Component {
    render() {
        return (
            /**
             * basename is needed if deploying to a non-root folder as exact route / will expect
             * the root folder and so will not work without basname if on a subfolder.
             */
            <Router basename={process.env.NODE_ENV === 'production' ? '/react-components/' : ''}>
                <Header />
                <Switch>
                    <Route exact path='/' component={Dashboard} />
                </Switch>
                <Footer footerText={Constants.strings.footerText} />
            </Router>
        );
    }
}

export default Routes;
