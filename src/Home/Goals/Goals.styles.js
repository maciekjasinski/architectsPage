import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme.spacing * 8}px;
    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${({ theme }) => theme.spacing * 4}px;
    }
    > div {
        display: grid;
        grid-template-columns: 140px auto;
        grid-column-gap: ${({ theme }) => theme.spacing * 4}px;
        align-items: center;
    }
`;

export const Number = styled.p`
    font-size: 180px;
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 700;
    margin: 0;
`;

export const Description = styled.p`
    line-height: 36px;
    margin: 0;
`;

export const Container = styled.div`
    margin: ${({ theme }) => theme.spacing * 6}px 0;
`;
