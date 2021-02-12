import React from 'react';
import { Container } from '@material-ui/core';
import { Header } from './Header/Header';
import { AboutUs } from './AboutUs/AboutUs';
import { Goals } from './Goals/Goals';
import { Gallery } from './Gallery/Gallery';
import { Contact } from './Contact/Contact';

export function Home() {
    return (
        <Container>
            <Header />
            <AboutUs />
            <Goals />
            <Gallery />
            <Contact />
        </Container>
    )
}
