import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: ${({ theme }) => theme.spacing * 12}px 0;
    background-color: #fbfbfb;
    padding: ${({ theme }) => theme.spacing * 4}px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme.spacing * 4}px;
    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${({ theme }) => theme.spacing * 4}px;
    }
`;

export const Title = styled.p`
    margin: 0;
    font-size: 64px;
    color: ${({ theme }) => theme.colors.mediumGray};
    letter-spacing: 2px;
`;

export const Description = styled.p`
    line-height: 25px;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    width: 220px;
    height: 70px;
    letter-spacing: 2px;
    text-transform: uppercase;
`;

export const ImagesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme.spacing * 4}px;
    width: 100%;
    > img {
        width: 100%;
        margin-top: ${({ theme }) => theme.spacing * 6}px;
    }
    > div > img:first-child {
        margin-bottom: ${({ theme }) => theme.spacing * 4}px;
    }
    > div > img {
        width: 100%;
    }
`