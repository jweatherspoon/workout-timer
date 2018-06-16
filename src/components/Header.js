import styled from 'styled-components';

const Header = styled.header`
    height: 100%;
    width: 100%;
    max-height: 100%;
    
    background-color: ${props => props.bgColor};
`;

export default Header;