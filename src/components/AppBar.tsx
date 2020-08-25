import * as React from 'react';
import Logo from '../../public/static/favicons/favicon.svg';
import NextLink from 'next/link';
import GithubLogo from '../../public/static/mark-github-16.svg';

const AppBar: React.FC = () => {
  return (
    <nav>
      <NextLink passHref href="/">
        <a>
          <Logo />
          <h2>@AdamSzwaba</h2>
        </a>
      </NextLink>
      <div aria-label="Other links">
        <a href="https://github.com/adamszwaba/blog">
          <GithubLogo />
          Source
        </a>
        <a href="https://useo.pl">USEO</a>
      </div>
    </nav>
  );
};
export default AppBar;
