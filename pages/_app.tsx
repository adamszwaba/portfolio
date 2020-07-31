import 'styles/globals.scss';
import * as React from 'react';
import type { AppProps } from 'next/app';
import TopNav from 'components/topnav';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <TopNav />
      <main className="container">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
