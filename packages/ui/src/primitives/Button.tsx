import {
    type ButtonProps as MuiButtonProps,
    Button as MuiButton,
} from '@mui/material';

import { ReactNode } from 'react';

interface ButtonProps extends MuiButtonProps {
    children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
    return <MuiButton {...rest}>{children}</MuiButton>;
};
