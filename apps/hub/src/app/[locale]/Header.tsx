'use client';

import { Box, Stack, Modal, Button, Centre, LanguageToggle } from '@repo/ui';

import { useRouter, usePathname } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { useState } from 'react';

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const [login, setLogin] = useState(false);

    const switchLanguage = (locale: string) => {
        router.push(pathname, { locale });
    };

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    width: '100%',
                    left: 0,
                    top: 0,
                    p: 1,
                    px: 2,
                }}
            >
                <Stack direction="row" spacing={1} display="flex">
                    <Button onClick={() => setLogin(true)} variant="contained">
                        Log in
                    </Button>
                    <LanguageToggle
                        selectedLanguage={currentLocale}
                        onLanguageChange={switchLanguage}
                    />
                </Stack>
            </Box>
            <Modal open={login} onClose={() => setLogin(false)}>
                <Centre>LOGIN</Centre>
            </Modal>
        </>
    );
}
