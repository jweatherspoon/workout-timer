import styled from 'styled-components';

const Hr = styled.hr`
    width: ${props => props.width ? props.width : 100}%;
    color: ${props => props.color ? props.color : 'inherit'};
`;

export { Hr };