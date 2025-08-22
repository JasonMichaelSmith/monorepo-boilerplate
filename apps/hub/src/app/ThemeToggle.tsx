'use client';

import { Button } from '@repo/ui';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    if (!theme) {
        return <Button onClick={() => {}}>Loading...</Button>;
    }

    return (
        <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            Current theme: {theme}
        </Button>
    );
}
