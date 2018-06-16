import React, { Component } from 'react';

import Header from './Header';
import FlexContainer from './FlexContainer';
import WorkoutButton from './WorkoutButton';
import { Hr } from './Hr';

import {
    XLText,
    LargeText
} from './Spans';

class HomePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
            working: false,
            counter: 45,
        }
    }

    componentDidMount() {
        // Get the currently selected workout from local storage
        let currentWorkout = localStorage.getItem("workout:current");

        if (currentWorkout) {
            currentWorkout = JSON.parse(currentWorkout);
        }

        this.setState({
            currentWorkout: currentWorkout,
        });

        setInterval(this.tick, 1000);
    }

    tick = () => {
        let counter = this.state.counter - 1;
        this.setState({
            counter: counter,
        })
    }

    getStateText = () => {
        let stateText;

        if (!this.state.currentWorkout) {
            stateText = "Select a Workout";
        } else if (!this.state.working) {
            stateText = "Start Workout";
        } else {
            stateText = "Stop Workout";
        }

        return stateText;
    }

    handleStateButton = () => {
        let working = !this.state.working;
        this.setState({
            working: working,
        })
    }

    render() {

        let workoutText = this.state.currentWorkout ||
            "No Workout Selected";

        let counterText = this.working ? this.state.counter : "";

        let stateText = this.getStateText();

        return (
            <Header bgColor={this.state.backgroundColor}>
                <FlexContainer center direction={'column'}>
                    <XLText>
                        {counterText}
                    </XLText>
                    <Hr width={25} color={'black'} />
                    <LargeText>
                        {workoutText}
                    </LargeText>
                    <WorkoutButton
                        onClick={this.handleStateButton}>
                        <FlexContainer center>
                            <LargeText>
                                {stateText}
                            </LargeText>
                        </FlexContainer>
                    </WorkoutButton>
                </FlexContainer>

            </Header>
        )
    }
}

export default HomePage;