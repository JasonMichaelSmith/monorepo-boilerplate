import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Card, ThemeToggle } from '@repo/ui';
import { getData } from '../lib/actions/data';
import { Suspense } from 'react';

export default function Home() {
    const t = useTranslations('homepage');
    const tCommon = useTranslations('common');

    return (
        <div>
            <Card
                content={
                    <>
                        <h1>{t('title')}</h1>
                        <p>{t('subtitle')}</p>
                        <p>{t('description')}</p>
                    </>
                }
                actions={
                    <>
                        <ThemeToggle />
                        <LanguageToggle />
                    </>
                }
            />
            <p>{tCommon('welcome')}</p>
            <Suspense fallback={<p>{tCommon('loading')}</p>}>
                <DataExampleComponent />
            </Suspense>
        </div>
    );
}

const DataExampleComponent = async () => {
    // This is a sample API-await-get using the lib/actions
    /* eslint-disable */
    const data = await getData();
    //console.log('server await api get', data);

    return null;
};
