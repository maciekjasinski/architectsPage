import styled from 'styled-components';
import { StyledLink as Link } from '../Navbar.styles';

export const Wrapper = styled.div`
    height: calc(100vh - 60px);
    background-color: white;
    padding: 32px 16px 0 16px;
`;

export const StyledLink = styled(Link)`
    && {
        display: block;
        margin: 0 0 32px 0;
    }
`;
