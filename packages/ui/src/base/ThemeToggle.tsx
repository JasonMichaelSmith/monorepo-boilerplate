'use client';

import { useColorScheme } from '@mui/material';
import { Button } from '../primitives/Button';

// TODO: next-intl via props
export function ThemeToggle() {
    const { mode, setMode } = useColorScheme();

    return (
        <Button
            variant="contained"
            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
            Theme: {mode}
        </Button>
    );
}
