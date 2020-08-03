import { createMuiTheme, responsiveFontSizes } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { spacing } from '@material-ui/system';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
const breakpoints = createBreakpoints({});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0366d6',
    },
    secondary: green,
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

export default theme;
