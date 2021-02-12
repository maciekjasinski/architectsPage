import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 500px;
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: ${({ theme }) => theme.spacing * 6}px 0;
    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
        grid-row-gap: ${({ theme }) => theme.spacing * 4}px;
    }
`;

export const SectionTitle = styled.p`
    font-size: 64px;
    margin: 0 0 ${({ theme }) => theme.spacing * 8}px;
    color: ${({ theme }) => theme.colors.mediumGray};
    font-weight: 300;
    text-transform: uppercase;
    > b {
        color: ${({ theme }) => theme.colors.primary};
    }
    @media screen and (max-width: 690px) {
        font-size: 52px;
    }
`;

export const InfoLabel = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    margin: 0 0 ${({ theme }) => theme.spacing * 2}px;
`;

export const Info = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 0 ${({ theme }) => theme.spacing * 8}px;
`;