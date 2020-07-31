import * as React from 'react';
import styles from './topnav.module.scss';
import Logo from '../../public/static/favicons/favicon.svg';
import NextLink from 'next/link';
import GithubLogo from '../../public/static/mark-github-16.svg';
import { Container, Link, AppBar, Toolbar, Typography } from '@material-ui/core';

const topnav: React.FC = () => {
  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <NextLink passHref href="/">
            <Link>
              <Logo />
              <Typography variant="h6">@AdamSzwaba</Typography>
            </Link>
          </NextLink>
          <Link href="https://github.com/adamszwaba/blog">
            <GithubLogo />
            Source
          </Link>
          <Link href="useo.pl">USEO</Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default topnav;
