import React, { Component } from 'react';
import styled from 'styled-components';

import '@fortawesome/fontawesome/styles.css';
import FontAwesome from '@fortawesome/react-fontawesome';
import {
    faHome,
    faCog
} from '@fortawesome/fontawesome-free-solid';

import FlexContainer from './FlexContainer';

const Navbar = styled.nav`
    position: fixed;
    width: 100%;
    height: 50px;
    border-bottom: 2px solid black;
    background-color: rgba(0,0,0,0.5);
    color: white;
    user-select: none;
`;

const NavbarLinks = styled.ul`
    display: inline-flex;
    list-style-type: none;
    width: 100%;
`;

const NavLink = styled.a`
    text-decoration: none;
    color: inherit;
`;

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                {
                    icon: faHome,
                    href: "/",
                },
                {
                    icon: faCog,
                    href: "/settings",
                }
            ]
        };
    }

    render() {

        let links = this.state.links.map(link => {
            return (
                <NavLink key={link.href} href={link.href}>
                    <FontAwesome icon={link.icon} size={'2x'}/>
                </NavLink>
            )
        });

        return (
            <Navbar>
                <FlexContainer justify={'space-around'} align={'center'}>
                    <NavbarLinks>
                        <FlexContainer align={'center'}
                            justify={'space-around'}>
                            {links}
                        </FlexContainer>
                    </NavbarLinks>
                </FlexContainer>
            </Navbar>
        )
    }
}

export default Navigation;