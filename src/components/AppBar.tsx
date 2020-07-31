import * as React from 'react';
import Logo from '../../public/static/favicons/favicon.svg';
import NextLink from 'next/link';
import GithubLogo from '../../public/static/mark-github-16.svg';
import { Container, Link, AppBar as MuiAppBar, Toolbar, Typography } from '@material-ui/core';

const AppBar: React.FC = () => {
  return (
    <MuiAppBar color="secondary" position="static">
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
    </MuiAppBar>
  );
};
export default AppBar;
