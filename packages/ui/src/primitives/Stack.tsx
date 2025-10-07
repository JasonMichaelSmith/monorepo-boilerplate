import {
    type StackProps as MuiStackProps,
    Stack as MuiStack,
} from '@mui/material';

import { ReactNode } from 'react';

interface StackProps extends MuiStackProps {
    children: ReactNode;
}

export const Stack = ({ children, ...rest }: StackProps) => {
    return <MuiStack {...rest}>{children}</MuiStack>;
};
