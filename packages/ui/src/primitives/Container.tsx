import { ReactNode } from 'react';
import {
    CssBaseline,
    Container as MuiContainer,
    type ContainerProps as MuiContainerProps,
} from '@mui/material';

interface ContainerProps extends MuiContainerProps {
    children: ReactNode;
    base?: boolean;
}

export function Container({
    children,
    base = false,
    ...props
}: ContainerProps) {
    return (
        <>
            {base && <CssBaseline />}
            <MuiContainer maxWidth={false} {...props}>
                {children}
            </MuiContainer>
        </>
    );
}
