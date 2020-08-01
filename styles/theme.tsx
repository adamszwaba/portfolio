import { createMuiTheme } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0366d6',
    },
    secondary: green,
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
