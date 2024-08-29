import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>SurfCode</title>
                <link rel='icon' href='/logoSurfCode.jpg' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Merriweather:wght@400;700&display=swap'
                    rel='stylesheet'
                />
                {/* Você pode adicionar outras meta tags aqui, como descrição, etc. */}
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
