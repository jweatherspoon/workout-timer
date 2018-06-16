import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header';
import FlexContainer from './FlexContainer';
import WorkoutRow from './WorkoutRow';
import { MedText } from './Spans';

import FontAwesome from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid';
import '@fortawesome/fontawesome/styles.css';

import Workout from '../models/workout';

const SettingsRow = styled.div`
    width: 100%;
    height: 50px;
    background-color: #eee;
    display: flex;
    border-bottom: 2px solid #ccc;
`;

class SettingsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workouts: null,
        };
    }

    componentDidMount() {
        // Get a list of all workouts in local storage
        let workouts = localStorage.getItem("workout:list");
        if(workouts) {
            workouts = JSON.parse(workouts);

            this.setState({
                workouts: workouts,
            });
        }
    }

    addWorkout = () => {
        let workouts = localStorage.getItem('workout:list') || "[]";
        workouts = JSON.parse(workouts);

        workouts.push(Workout("beans", [
            "1","2","3"
        ], 45, 15))

        this.setState({
            workouts: workouts
        })

        console.log(this.state.workouts);

        workouts = JSON.stringify(workouts);
        localStorage.setItem("workout:list", workouts);
    }

    render() {

        let workouts, favorites;

        if(this.state.workouts) {
            workouts = this.state.workouts.map(workout => {
                return <WorkoutRow key={workout.name} name={workout.name}
                 favorited={workout.favorited} />
            });
    
            favorites = workouts.filter(workout => workout.favorited);
        }

        return (
            <Header top={50}>
                <FlexContainer align={'flex-start'} direction={'column'}>
                    <SettingsRow>
                        <FlexContainer align={'center'} justify={'space-around'} onClick={this.addWorkout}>
                            <MedText>Add Workout</MedText>
                            <FontAwesome icon={faPlus} size={'2x'}/>
                        </FlexContainer>
                    </SettingsRow>

                    <SettingsRow>
                        <FlexContainer center>
                            <MedText>Favorites</MedText>
                        </FlexContainer>
                    </SettingsRow>

                    {favorites}

                    <SettingsRow>
                        <FlexContainer center>
                            <MedText>All Workouts</MedText>
                        </FlexContainer>
                    </SettingsRow>
                </FlexContainer>

                {workouts}
            </Header>
        )
    }
}

export default SettingsPage;