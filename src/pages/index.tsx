import Home from '@/Interfaces/Home';
import Head from 'next/head';

export default function PageHome() {
    return (
        <>
            <Head>
                <title>Flip BR</title>
                <meta name="description" content="FlipBR" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Home/>
            
        </>
    );
}