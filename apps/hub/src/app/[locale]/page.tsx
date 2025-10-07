import { Container } from '@repo/ui';
import { useTranslations } from 'next-intl';

import Header from './Header';

import { getData } from '../lib/actions/data';
import { Suspense } from 'react';

export default function Home() {
    const tCommon = useTranslations('common');

    return (
        <div suppressHydrationWarning>
            <Container base>
                <Header />
                <p>{tCommon('welcome')}</p>
                <Suspense fallback={<p>{tCommon('loading')}</p>}>
                    <DataExampleComponent />
                </Suspense>
            </Container>
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
