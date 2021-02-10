import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Container, IconButton } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import Logo from '../../assets/logo.png';
import {
    FlexWrapper,
    StyledLink,
    MobileWrapper
} from './Navbar.styles';
import { Drawer } from './Drawer/Drawer.js';

export function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const closeDrawer = () => {
        setIsDrawerOpen(false);
    }
    return (
        <>
            {isMobile ?
                <MobileWrapper>
                    <Link to="/">
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <IconButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                        {isDrawerOpen ? <Close /> : <Menu />}
                    </IconButton>
                </MobileWrapper>
            :
                <Container>
                    <FlexWrapper>
                        <Link to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <div>
                            <StyledLink to="/">Home</StyledLink>
                            <StyledLink to="/gallery">Gallery</StyledLink>
                            <StyledLink to="/projects">Projects</StyledLink>
                            <StyledLink to="/certificates">Certificates</StyledLink>
                            <StyledLink to="/contacts">Contacts</StyledLink>
                        </div>
                    </FlexWrapper>
                </Container>
            }
            {isDrawerOpen && <Drawer close={setIsDrawerOpen} />}
        </>
    )
}
