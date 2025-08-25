import { useTranslations } from 'next-intl';
import { LanguageToggle } from './LanguageToggle';
import { Card, ThemeToggle } from '@repo/ui';

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
            <p>
                {tCommon('welcome')} • {tCommon('loading')}
            </p>
        </div>
    );
}
