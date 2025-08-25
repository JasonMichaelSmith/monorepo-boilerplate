'use client';

import { useColorScheme } from '@mui/material';
import { Button } from './Button';

export function ThemeToggle() {
    const { mode, setMode } = useColorScheme();

    return (
        <Button
            variant="contained"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
            Current theme: {mode}
        </Button>
    );
}
