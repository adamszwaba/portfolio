import * as React from 'react';
import Logo from '../../public/static/favicons/favicon.svg';
import NextLink from 'next/link';
import GithubLogo from '../../public/static/mark-github-16.svg';
import {
  Divider,
  Container,
  Link,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  createStyles,
  makeStyles,
  Theme,
  SvgIcon,
  Button,
} from '@material-ui/core';
import { yellow } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: 'flex',
//       justifyContent: 'space-between',
//     },
//     logoBar: {
//       display: 'flex',
//     },
//     logo: {
//       height: theme.typography.h5.fontSize,
//       alignSelf: 'center',
//       marginRight: theme.spacing(1.5),
//     },
//     logoName: {
//       fontWeight: 'bold',
//       paddingLeft: theme.spacing(1.5),
//     },
//     links: {
//       display: 'flex',
//     },
//     gitLink: {
//       color: theme.palette.grey[500],
//     },
//     gitIcon: {
//       marginRight: theme.spacing(0.5),
//     },
//     useoLink: {
//       color: yellow[700],
//     },
//   }),
// );

const AppBar: React.FC = () => {
  // const classes = useStyles();
  return (
    <nav>
      {/* <Container
        className={classes.container}
        component={(props) => <Toolbar disableGutters {...props}></Toolbar>}
        maxWidth="md"
      > */}
      <NextLink passHref href="/">
        <a>
          <Logo />
          {/* <Divider orientation="vertical" flexItem /> */}
          <h2>@AdamSzwaba</h2>
        </a>
      </NextLink>
      <div aria-label="Other links">
        <a
          // className={classes.gitLink}
          // component="a"
          // size="small"
          href="https://github.com/adamszwaba/blog"
          // startIcon={
          //   <SvgIcon className={classes.gitIcon} component={GithubLogo} viewBox="0 0 16 16" />
          // }
        >
          <GithubLogo />
          Source
        </a>
        <a href="https://useo.pl">USEO</a>
      </div>
      {/* </Container> */}
    </nav>
  );
};
export default AppBar;
