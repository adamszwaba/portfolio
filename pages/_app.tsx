import '../styles/general.scss';
import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import AppBar from 'components/AppBar';
import SEO from '../next-seo.config';
import MDXComponents from 'components/MDXComponents';
import { ChakraProvider, Container } from '@chakra-ui/react';
import FontFace from 'styles/font-face';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <MDXProvider components={MDXComponents}>
          <AppBar />
          <Container maxWidth="container.lg" component="main" py="8">
            <Component {...pageProps} />
          </Container>
        </MDXProvider>
      </ChakraProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
