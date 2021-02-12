import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme }) => theme.spacing * 4}px;
    margin-top: ${({ theme }) => theme.spacing * 4}px;
    @media screen and (max-width: 690px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledTextField = styled(TextField)`
    && {
        margin-bottom: ${({ theme }) => theme.spacing * 4}px;
    }
`;

export const FormInfo = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
    margin: 0 0 ${({ theme }) => theme.spacing * 8}px;
`;
