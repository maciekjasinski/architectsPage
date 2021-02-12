import React from 'react';
import HeaderImage from '../../assets/Images/HeaderImage.jpg';
import {
    Title,
    TitleBold,
    ImageWrapper,
    ImageButton,
    GridWrapper,
    Image
} from './Header.styles';

export function Header() {
    return (
        <GridWrapper>
            <div>
                <Title>Project</Title>
                <TitleBold>Nurtown</TitleBold>
            </div>
            <ImageWrapper>
                <Image src={HeaderImage} alt="Header image" />
                <ImageButton>Read more</ImageButton>
            </ImageWrapper>
        </GridWrapper>
    )
}
