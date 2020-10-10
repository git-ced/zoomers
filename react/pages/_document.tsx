// ANCHOR React
import React from 'react';

// ANCHOR Next
import Document, {
  DocumentContext, Head, Main, NextScript, Html,
} from 'next/document';

// ANCHOR Styletron
import { Client, Sheet } from 'styletron-engine-atomic';

// ANCHOR Utils
import { styletron } from '@zoomers/utils/styletron';
     
function getStylesheets() {
  if (styletron instanceof Client) {
    return [];
  }
  return styletron.getStylesheets();
}

interface IZoomerDocumentProps extends DocumentContext {
  stylesheets?: Sheet[];
}

class ZoomerDocument extends Document<IZoomerDocumentProps> {
  public static async getInitialProps(ctx: IZoomerDocumentProps) {
    const initialProps = await Document.getInitialProps(ctx);
    const stylesheets = getStylesheets() || [];
    return { stylesheets, ...initialProps };
  }

  public render() {
    const { stylesheets } = this.props;

    return (
      <Html lang="en">
        <Head>
          {
            stylesheets && stylesheets.map(
              (sheet: Sheet, i: number) => (
                <style
                  className="_styletron_hydrate_"
                  dangerouslySetInnerHTML={{ __html: sheet.css }}
                  media={sheet.attrs.media}
                  data-hydrate={sheet.attrs['data-hydrate']}
                  key={i}
                />
              )
            )
          }
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://source.zoom.us/1.8.1/lib/vendor/react.min.js"></script>
          <script src="https://source.zoom.us/1.8.1/lib/vendor/react-dom.min.js"></script>
          <script src="https://source.zoom.us/1.8.1/lib/vendor/redux.min.js"></script>
          <script src="https://source.zoom.us/1.8.1/lib/vendor/redux-thunk.min.js"></script>
          <script src="https://source.zoom.us/1.8.1/lib/vendor/lodash.min.js"></script>
          <script src="https://source.zoom.us/1.8.1/lib/vendor/jquery.min.js"></script>
          
          <script src="https://source.zoom.us/zoom-meeting-1.8.1.min.js"></script>
        </body>
      </Html>
    );
  }
}

// eslint-disable-next-line import/no-default-export
export default ZoomerDocument;
