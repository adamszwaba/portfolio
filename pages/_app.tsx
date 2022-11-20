import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import AppBar from 'components/app-bar';
import SEO from '../next-seo.config';
import MDXComponents from 'components/mdx-components';
import Head from 'next/head';
import Footer from 'components/footer';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      </Head>
      <MDXProvider components={MDXComponents}>
        <AppBar />
        <main className="container w-[100vw]">
          <Component {...pageProps} />
        </main>
        <Footer />
      </MDXProvider>
    </>
  );
}

export default MyApp;
