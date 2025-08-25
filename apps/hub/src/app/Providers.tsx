'use client';

import { ThemeProvider } from '@repo/ui';
import { useState, useEffect } from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <>{children}</>; // Render children without ThemeProvider during SSR
    }

    // Wrap children with ThemeProvider after mount
    return <ThemeProvider>{children}</ThemeProvider>;
}
