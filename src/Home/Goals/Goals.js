import React from 'react';
import { Title } from '../AboutUs/AboutUs.styles';
import { 
    Wrapper,
    Number,
    Description,
    Container
} from './Goals.styles';

export function Goals() {
    return (
        <Container>
            <Title>Main goals</Title>
            <Wrapper>
                <div>
                    <Number>1</Number>
                    <Description>Creating a comfortable environment and improving the quality of customer service</Description>
                </div>
                <div>
                    <Number>2</Number>
                    <Description>
                        Constantly improve the quality of services provided by training personnel, purchasing new equipment and enhanced advertising on the market
                    </Description>
                </div>
            </Wrapper>
        </Container>
    )
}