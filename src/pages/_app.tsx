import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>SurfCode</title>
                <link rel='icon' href='/logoSurfCode.jpg' />
                <link
                    rel='stylesheet'
                    href='https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap'
                />
                {/* Você pode adicionar outras meta tags aqui, como descrição, etc. */}
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
