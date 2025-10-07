import { type LinkProps as MuiLinkProps, Link as MuiLink } from '@mui/material';

import { ReactNode } from 'react';

interface LinkProps extends MuiLinkProps {
    children: ReactNode;
}

export const Link = ({ children, ...rest }: LinkProps) => {
    return <MuiLink {...rest}>{children}</MuiLink>;
};
