import { type BoxProps as MuiBoxProps, Box as MuiBox } from '@mui/material';

import { ReactNode } from 'react';

interface BoxProps extends MuiBoxProps {
    children: ReactNode;
}

export const Box = ({ children, ...rest }: BoxProps) => {
    return <MuiBox {...rest}>{children}</MuiBox>;
};
