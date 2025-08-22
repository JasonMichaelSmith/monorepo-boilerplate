'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export function LanguageToggle() {
    const t = useTranslations('common');
    const router = useRouter();
    const pathname = usePathname();

    const switchLanguage = (locale: string) => {
        router.push(pathname, { locale });
    };

    return (
        <div className="p-2">
            <span>{t('language')}: </span>
            <button onClick={() => switchLanguage('en')}>EN</button>
            <button
                style={{ marginLeft: '0.5rem' }}
                onClick={() => switchLanguage('es')}
            >
                ES
            </button>
        </div>
    );
}
