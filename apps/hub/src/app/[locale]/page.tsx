import { useTranslations } from 'next-intl';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

export default function Home() {
    const t = useTranslations('homepage');
    const tCommon = useTranslations('common');

    return (
        <div>
            <h1>{t('title')}</h1>
            <p>{t('subtitle')}</p>
            <p>{t('description')}</p>

            <div>
                <ThemeToggle />
                <LanguageToggle />
            </div>

            <p>
                {tCommon('welcome')} • {tCommon('loading')}
            </p>
        </div>
    );
}
