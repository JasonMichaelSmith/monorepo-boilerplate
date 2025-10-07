import {
    type TypographyProps as MuiTypographyProps,
    Typography as MuiTypography,
} from '@mui/material';

import { ReactNode } from 'react';

interface TypographyProps extends MuiTypographyProps {
    children: ReactNode;
}

export const Typography = ({ children, ...rest }: TypographyProps) => {
    return <MuiTypography {...rest}>{children}</MuiTypography>;
};
