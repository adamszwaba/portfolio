/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import TopNav from 'src/components/topnav';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div className="container">
      <TopNav />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
