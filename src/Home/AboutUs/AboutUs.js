import React from 'react';
import { 
    Wrapper,
    Title,
    Description,
    Button,
    ImagesWrapper
} from './AboutUs.styles';
import Image1 from '../../assets/Images/Image1.png';
import Image2 from '../../assets/Images/Image2.png';
import Image3 from '../../assets/Images/Image3.png';

export function AboutUs() {
    return (
        <Wrapper>
            <ImagesWrapper>
                <div>
                    <img src={Image1} alt="image1" />
                    <img src={Image3} alt="image3" />
                </div>
                <img src={Image2} alt="image2" />
            </ImagesWrapper>
            <div>
                <Title>About us </Title>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat facilisis massa. Donec metus magna, ornare eu sollicitudin vitae, 
                    viverra suscipit risus. Mauris eget eros sollicitudin, mollis nulla pretium, sollicitudin odio. Phasellus rutrum magna ut massa feugiat lobortis. 
                </Description>
                <Button>Read More</Button>
            </div>
        </Wrapper>
    )
}
