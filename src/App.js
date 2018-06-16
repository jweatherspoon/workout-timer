import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import Error404 from './components/Error404';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div style={{height: "100%"}}>
                    <Navigation />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/settings" component={SettingsPage} />
                        <Route component={Error404} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
