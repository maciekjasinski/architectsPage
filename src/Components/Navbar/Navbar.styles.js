import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

export const FlexWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    position: sticky;
    > img {
        width: auto;
        height: 50px;
    }
`;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
    && {
        margin-left: ${({ theme }) => theme.spacing * 16}px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary};
        text-decoration: none;
        font-size: 14px;
        display: inline-block;
        height: 30px;
        line-height: 30px;

    
        
    }
    &.${activeClassName} {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
    }
`;

export const MobileWrapper = styled.div`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: ${({ theme }) => theme.spacing * 4}px;
`;
