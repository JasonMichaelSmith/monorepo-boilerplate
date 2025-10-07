import { Theme } from '@emotion/react';

import {
    createTheme,
    ThemeProvider as MuiThemeProvider,
    ThemeProviderProps as MuiThemeProviderProps,
} from '@mui/material';

import { ReactNode } from 'react';

interface ThemeProviderProps extends Omit<MuiThemeProviderProps, 'theme'> {
    theme?: Theme;
    children: ReactNode;
}

export const defaultTheme = createTheme({
    colorSchemes: {
        dark: true,
        light: true,
    },
    defaultColorScheme: 'dark',
});

export const ThemeProvider = ({
    children,
    theme = defaultTheme,
    ...rest
}: ThemeProviderProps) => {
    return (
        <MuiThemeProvider theme={theme} {...rest}>
            {children}
        </MuiThemeProvider>
    );
};
