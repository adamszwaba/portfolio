/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Header from 'src/components/header';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
