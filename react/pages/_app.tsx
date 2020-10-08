// ANCHOR Next
import App, { AppContext } from 'next/app';

// ANCHOR React
import React from 'react';

// ANCHOR CSS
import 'normalize.css/normalize.css';

interface AppProps {
  err?: Error;
}

// NOTE Next App requires this to be exported by default
// eslint-disable-next-line import/no-default-export
export default class ZoomerApp extends App<AppProps> {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  public static async getInitialProps(appContext: AppContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  public render() {
    const {
      Component, pageProps,
    } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}
