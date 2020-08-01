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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    logoBar: {
      display: 'flex',
    },
    logo: {
      height: theme.typography.h5.fontSize,
      alignSelf: 'center',
      marginRight: theme.spacing(1.5),
    },
    logoName: {
      fontWeight: 'bold',
      paddingLeft: theme.spacing(1.5),
    },
    links: {
      display: 'flex',
    },
    gitLink: {
      color: theme.palette.grey[500],
    },
    gitIcon: {
      marginRight: theme.spacing(0.5),
    },
    useoLink: {
      color: yellow[700],
    },
  }),
);

const AppBar: React.FC = () => {
  const classes = useStyles();
  return (
    <MuiAppBar>
      <Container
        className={classes.container}
        component={(props) => <Toolbar disableGutters {...props}></Toolbar>}
        maxWidth="md"
      >
        <NextLink passHref href="/">
          <Link className={classes.logoBar}>
            <Logo className={classes.logo} />
            <Divider orientation="vertical" flexItem />
            <Typography className={classes.logoName} variant="h5">
              @AdamSzwaba
            </Typography>
          </Link>
        </NextLink>
        <div className={classes.links} aria-label="Other links">
          <Button
            className={classes.gitLink}
            component="a"
            size="small"
            href="https://github.com/adamszwaba/blog"
            startIcon={
              <SvgIcon className={classes.gitIcon} component={GithubLogo} viewBox="0 0 16 16" />
            }
          >
            Source
          </Button>
          <Button className={classes.useoLink} component="a" href="https://useo.pl">
            USEO
          </Button>
        </div>
      </Container>
    </MuiAppBar>
  );
};
export default AppBar;
