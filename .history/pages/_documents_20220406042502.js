import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
ca


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;
  const cache = createCache({ key: 'css' });
  const {extractCriticalToChunks} = createEmotionServer(cache);
  ctx.renderPage = () => originalRenderPage({
    // eslint-disable-next-line react/display-name
    enhanceApp: (App) => (props) => <App {...props} emotionStyles={cache} styles={styles} />});

    const initialProps = await Document.getInitialProps(ctx);
    const emotionalStyles = extractCriticalToChunks(initialProps.html);
    const emotionalStylesTags = emotionalStyles.styles.map((style)=>{
        <style
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: style.css }}
        />
    });
    return {
      ...initialProps,
      styles: [
        React.Children.toArray(initialProps.styles),
        ...emotionalStylesTags,
      ],
    };
}
