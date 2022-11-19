import '../styles/globals.css';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import AppBar from 'components/AppBar';
import SEO from '../next-seo.config';
import MDXComponents from 'components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <DefaultSeo {...SEO} />
      <MDXProvider components={MDXComponents}>
        <AppBar />
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
