import styled from 'styled-components';

export const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightBlack};
    padding: ${({ theme }) => theme.spacing * 15}px 0 0;
    color: ${({ theme }) => theme.colors.white};
`;

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${({ theme }) => theme.spacing * 13}px;
    }
`;

export const SectionTitle = styled.p`
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 ${({ theme }) => theme.spacing * 6}px;
`;

export const InfoWrapper = styled.div`
    margin-top: ${({ theme }) => theme.spacing * 4}px;
    padding: ${({ theme }) => theme.spacing * 6}px;
    text-align: center;
    color: ${({ theme }) => theme.colors.mediumGray};
    border-top: 1px solid ${({ theme }) => theme.colors.mediumGray};
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    @media screen and (max-width: 690px) {
        margin-top: ${({ theme }) => theme.spacing * 8}px;
    }
`;

export const ContactWrapper = styled.div`
    > div {
        display: flex;
        align-items: center;
        margin-bottom:  ${({ theme }) => theme.spacing * 6}px;
        line-height: 24px;
        > svg {
            width: 16px;
            height: 16px;
            margin-right: ${({ theme }) => theme.spacing * 4}px;
        }
    }
`;

export const SocialWrapper = styled.div`
    > svg {
        margin-right: ${({ theme }) => theme.spacing * 4}px;
    }
`;

export const LogoWrapper = styled.div`
    display: grid;
    justify-content: center;
`;
