import '../styles/general.scss';
import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
// import { ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Container from '@material-ui/core/Container';
import AppBar from 'components/AppBar';
// import theme from 'styles/theme';
import SEO from '../next-seo.config';
import MDXComponents from 'components/MDXComponents';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // React.useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentElement!.removeChild(jssStyles);
  //   }
  // }, []);
  return (
    // <ThemeProvider theme={theme}>
    <MDXProvider components={MDXComponents}>
      <DefaultSeo {...SEO} />
      {/* <CssBaseline /> */}
      <AppBar />
      <Component {...pageProps} />
    </MDXProvider>
    // </ThemeProvider>
  );
}

export default MyApp;
