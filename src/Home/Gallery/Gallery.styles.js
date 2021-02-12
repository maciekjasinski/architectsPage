import styled from 'styled-components';

export const GridWrapper = styled.div`
    margin-top: ${({ theme }) => theme.spacing * 6}px;
    > div {
        display: grid;
        grid-column-gap: auto;
        > img {
            width: 100%;
            height: 100%;
        }
    }
    .row1 {
        grid-template-columns: repeat(2, auto);
        margin-bottom: ${({ theme }) => theme.spacing * 8}px;
        @media screen and (max-width: 690px) {
            margin-bottom: ${({ theme }) => theme.spacing * 4}px;
            grid-template-columns: 1fr;
            grid-row-gap: 16px;
        }
    }
    .row2 {
        grid-template-columns: repeat(3, auto);
        margin-bottom: ${({ theme }) => theme.spacing * 6}px;
    }
`;

export const Button = styled.button`
    width: 220px;
    height: 70px;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    text-transform: uppercase;
    margin-bottom: ${({ theme }) => theme.spacing * 6}px;
`;

export const Wrapper = styled.div`
    margin: ${({ theme }) => theme.spacing * 6}px 0 ${({ theme }) => theme.spacing * 8}px;
`;