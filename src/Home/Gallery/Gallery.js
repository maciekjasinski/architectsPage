import React from 'react';
import { isMobile } from 'react-device-detect';
import Image1 from '../../assets/Images/Gallery/g1.png';
import Image2 from '../../assets/Images/Gallery/g2.png';
import Image3 from '../../assets/Images/Gallery/g3.png';
import Image4 from '../../assets/Images/Gallery/g4.png';
import Image5 from '../../assets/Images/Gallery/g5.png';
import { Title } from '../AboutUs/AboutUs.styles';
import { GridWrapper, Button, Wrapper } from './Gallery.styles';

export function Gallery() {
    return (
        <Wrapper>
            <Title>Gallery</Title>
            <GridWrapper>
                <div className="row1">
                    <img src={Image1} alt="Gallery Image" />
                    <img src={Image2} alt="Gallery Image" />
                </div>
                {!isMobile &&
                    <div className="row2">
                        <img src={Image3} alt="Gallery Image" />
                        <img src={Image4} alt="Gallery Image" />
                        <img src={Image5} alt="Gallery Image" />
                    </div>
                }
            </GridWrapper>
            <Button>Show more</Button>
        </Wrapper>
    )
}
