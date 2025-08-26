'use client';

import { useRouter, usePathname } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { useData } from '../hooks/data';

export function LanguageToggle() {
    const t = useTranslations('common');
    const router = useRouter();
    const pathname = usePathname();

    // This is a sample API-hook using the route API
    /* eslint-disable */
    const { loading, data } = useData();

    const switchLanguage = (locale: string) => {
        router.push(pathname, { locale });
    };

    if (loading) {
        return <p>{t('loading')}</p>;
    }

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
