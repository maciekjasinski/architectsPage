import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 30% auto;
    grid-column-gap: ${({ theme }) => theme.spacing * 16}px;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing * 8}px;
    @media screen and (max-width: 690px) {
        margin: ${({ theme }) => theme.spacing * 16}px 0 ${({ theme }) => theme.spacing * 16}px;
        grid-template-columns: 1fr;
        grid-row-gap: ${({ theme }) => theme.spacing * 12}px;
    }
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.mediumGray};
    font-size: 64px;
    margin: 0;
    font-weight: 400;
    text-transform: uppercase;
`;

export const TitleBold = styled(Title)`
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
`;

export const ImageWrapper = styled.div`
    position: relative;
`;

export const Image = styled.img`
    width: 100%;
`;

export const ImageButton = styled.button`
    border: none;
    outline: none;
    text-transform: uppercase;
    width: 220px;
    height: 70px;
    position: absolute;
    left: 0;
    bottom: 0;
    color: ${({ theme }) => theme.colors.primary};
    letter-spacing: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
`;

