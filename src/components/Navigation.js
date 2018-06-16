import React, { Component } from 'react';
import styled from 'styled-components';

import '@fortawesome/fontawesome/styles.css';
import FontAwesome from '@fortawesome/react-fontawesome';
import {
    faHome,
    faCog
} from '@fortawesome/fontawesome-free-solid';

import FlexContainer from './FlexContainer';
import { MedText } from './Spans';

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid black;
    background-color: rgba(0,0,0,0.5);
    color: white;
    user-select: none;
`;

const NavbarBrand = styled.a`
    text-decoration: none;
`;

const NavbarLinks = styled.ul`
    display: inline-flex;
    list-style-type: none;
    width: 100%;
`;

const NavLink = styled.li`

`;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <Navbar>
                <FlexContainer justify={'space-around'} align={'center'}>
                    <NavbarLinks>
                        <FlexContainer align={'center'}
                            justify={'space-around'}>
                            <NavLink>
                                <FontAwesome icon={faHome}
                                    size={'2x'} />
                            </NavLink>
                            <NavLink>
                                <FontAwesome icon={faCog}
                                    size={'2x'} />
                            </NavLink>
                        </FlexContainer>
                    </NavbarLinks>
                </FlexContainer>
            </Navbar>
        )
    }
}

export default Navigation;