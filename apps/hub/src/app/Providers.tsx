'use client';

import { ThemeProvider } from '@repo/ui';

export default function Providers({ children }: { children: React.ReactNode }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
