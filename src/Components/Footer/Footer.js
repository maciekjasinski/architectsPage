import React from 'react';
import { Container } from '@material-ui/core';
import {
    LocationOn,
    Phone,
    MailOutline,
    Facebook,
    Twitter,
    LinkedIn
} from '@material-ui/icons';
import Logo from '../../assets/logoNegative.png';
import { 
    Wrapper,
    GridWrapper,
    SectionTitle,
    InfoWrapper,
    ContactWrapper,
    SocialWrapper,
    LogoWrapper
 } from './Footer.styles';

export function Footer() {
    return (
        <Wrapper>
            <Container>
                <GridWrapper>
                    <LogoWrapper>
                        <img src={Logo} alt="logo" />
                    </LogoWrapper>
                    <ContactWrapper>
                        <SectionTitle>Contact</SectionTitle>
                        <div>
                            <LocationOn /> Dulwich, London SE21 7BB, <br/>United Kingdom
                        </div>
                        <div>
                            <Phone /> +32 (2331) 32123
                        </div>
                        <div>
                            <MailOutline /> architects@gmail.com
                        </div>
                    </ContactWrapper>
                    <SocialWrapper>
                        <SectionTitle>Follow us</SectionTitle>
                        <Facebook /> <Twitter /> <LinkedIn />
                    </SocialWrapper>
                </GridWrapper>
            </Container>
            <InfoWrapper>
                Coded by Maciej Jasiński. Designed by Padre Loo
            </InfoWrapper>
        </Wrapper>
    )
}
