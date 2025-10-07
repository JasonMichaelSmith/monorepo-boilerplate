import { type BoxProps as MuiBoxProps, Box as MuiBox } from '@mui/material';

import { type ReactNode } from 'react';

interface CentreBoxProps extends MuiBoxProps {
    children: ReactNode;
}

export const Centre = ({ children, ...rest }: CentreBoxProps) => {
    return (
        <MuiBox
            sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}
        >
            <MuiBox
                {...rest}
                sx={{
                    bgcolor: 'background.default',
                    boxShadow: 24,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    outline: 'none',
                    border: 'none',
                    ...rest?.sx,
                }}
            >
                {children}
            </MuiBox>
        </MuiBox>
    );
};
