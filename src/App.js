import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import SettingsPage from './components/SettingsPage';
import Error404 from './components/Error404';

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navHeight: 50,
        }
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    handleResize = () => {
        this.setState({
            contentHeight: window.innerHeight - this.state.navHeight,
        })
    }

    render() {

        return (
            <BrowserRouter>
                <div style={{height: "100%"}}>
                    <div>
                        <Navigation height={this.state.navHeight}/>
                    </div>  
                    <div style={{
                        paddingTop: this.state.navHeight,
                        height: this.state.contentHeight  
                    }}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/settings" component={SettingsPage} />
                            <Route component={Error404} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
