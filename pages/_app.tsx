import '../styles/general.scss';
import * as React from 'react';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from 'components/AppBar';
import SEO from '../next-seo.config';
import MDXComponents from 'components/MDXComponents';
import { createMuiTheme, PaletteType, Switch } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [mode, setMode] = React.useState<PaletteType>('light');
  const toggleTheme = () => {
    mode === 'dark' ? setMode('light') : setMode('dark');
  };

  const theme = createMuiTheme({
    palette: {
      type: mode,
      primary: {
        main: '#0366d6',
      },
    },
    typography: {
      fontSize: 18,
      h1: {
        fontSize: '30px',
        lineHeight: '40px',
        [breakpoints.up('md')]: {
          fontSize: '40px',
          lineHeight: '48px',
        },
      },
      h2: {
        fontSize: '26px',
        lineHeight: '32px',
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: '36px',
          lineHeight: '40px',
        },
      },
      h3: {
        fontSize: '22px',
        lineHeight: '28px',
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: '32px',
          lineHeight: '34px',
        },
      },
      h4: {
        fontSize: '18px',
        lineHeight: '32px',
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: '28px',
          lineHeight: '30px',
        },
      },
      h5: {
        fontSize: '14px',
        lineHeight: '24px',
        [breakpoints.up('md')]: {
          fontSize: '24px',
          lineHeight: '26px',
        },
      },
      h6: {
        fontSize: '10px',
        lineHeight: '16px',
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: '20px',
          lineHeight: '24px',
        },
      },
      body1: {
        fontSize: '18px',
        lineHeight: '28px',
        fontWeight: 'bold',
        [breakpoints.up('md')]: {
          fontSize: '21px',
          lineHeight: '32px',
        },
      },
    },
    props: {
      MuiAppBar: {
        position: 'static',
        color: 'inherit',
      },
      MuiLink: {
        color: 'inherit',
      },
      // Name of the component
    },
  });
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <DefaultSeo {...SEO} />
        <CssBaseline />
        <AppBar>
          <Switch checked={mode === 'light'} onChange={toggleTheme} />
        </AppBar>
        <Container maxWidth="md" component="main">
          <Component {...pageProps} />
        </Container>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
