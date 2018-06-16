import React, { Component } from 'react';
import styled from 'styled-components';

import FlexContainer from './FlexContainer';
import { SmallText } from './Spans';

import '@fortawesome/fontawesome/styles.css';
import FontAwesome from '@fortawesome/react-fontawesome';
import {
    faStar,
    faArrowDown,
} from '@fortawesome/fontawesome-free-solid';

const ContainerRow = styled.div`
    width: 100%;
    height: 30px;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
`;

const Icon = styled(FontAwesome)`
    color: ${props => props.color || "inherit"};
`;

class WorkoutRow extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        let color = this.props.favorited ? 'yellow' : 'gray';

        return (
            <ContainerRow>
                <FlexContainer align={'center'} justify={'space-around'}>
                    <SmallText>
                        {this.props.name}
                    </SmallText>
                    <Icon color={color} icon={faStar} size={'2x'}/>
                    <Icon icon={faArrowDown} size={'2x'}/>
                </FlexContainer>
            </ContainerRow>
        )
    }
}

export default WorkoutRow;