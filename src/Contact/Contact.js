import React from 'react';
import { Container } from '@material-ui/core';
import { TileLayer, Marker } from 'react-leaflet';
import {
    StyledMapContainer,
    Wrapper,
    SectionTitle,
    Info,
    InfoLabel
} from './Contact.styles';

export function Contact() {
    return (
        <Container>
            <Wrapper>
                <div>
                    <SectionTitle>
                        Contact<br/>
                        <b>Information</b>
                    </SectionTitle>
                    <InfoLabel>Address</InfoLabel>
                    <Info>Dulwich, London SE21 7BB, United Kingdom</Info>
                    <InfoLabel>Phone number</InfoLabel>
                    <Info>+32 (2331) 32123</Info>
                    <InfoLabel>Email</InfoLabel>
                    <Info>architects@gmail.com</Info>
                </div>
                <div>
                <StyledMapContainer center={[51.44424750239344, -0.08202060036484438]} zoom={15} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.44424750239344, -0.08202060036484438]} />
                    </StyledMapContainer>

                </div>
            </Wrapper>
        </Container>
    )
}
