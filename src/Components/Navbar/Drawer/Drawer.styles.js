import styled from 'styled-components';
import { StyledLink as Link } from '../Navbar.styles';

export const Wrapper = styled.div`
    height: calc(100vh - 60px);
    background-color: white;
    padding: ${({ theme }) => theme.spacing * 8}px ${({ theme }) => theme.spacing * 4}px 
        0 ${({ theme }) => theme.spacing * 4}px;
`;

export const StyledLink = styled(Link)`
    && {
        display: block;
        margin: 0 0 ${({ theme }) => theme.spacing * 8}px 0;
    }
`;
