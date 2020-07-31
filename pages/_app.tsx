import '../styles/codeHighlighting.scss';
import * as React from 'react';
import { DefaultSeo } from 'next-seo';
// import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from 'components/AppBar';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#ffffff',
      },
    },
    props: {
      // Name of the component
      MuiButtonBase: {
        // The properties to apply
        disableRipple: true, // No more ripple, on the whole application!
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <MDXProvider components={MDXComponents}> */}
        <DefaultSeo {...SEO} />

        <CssBaseline />
        <AppBar />
        <Container maxWidth="md" component="main">
          <Component {...pageProps} />
        </Container>
        {/* </MDXProvider> */}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
