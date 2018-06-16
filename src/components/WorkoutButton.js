import styled from 'styled-components';

const WorkoutButton = styled.button`
    width: 100%;
    position: absolute;
    bottom: 0;
    height: ${props => props.height ? props.height : '50px'};
    border-top: 3px solid black;
    background-color: #ccc;
    user-select: none;
    margin: 0;
    padding: 0;

    ${this}:focus {
        background-color: #aaa;
    }
`;

export default WorkoutButton;