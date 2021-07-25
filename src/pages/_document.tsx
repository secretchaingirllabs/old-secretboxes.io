import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html className="overflow-x-hidden" lang="en">
        <Head>
          <link
            rel="preload"
            href="/assets/fonts/Gobold/Gobold_High.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/Source_Sans_Pro/SourceSansPro-SemiBold.ttf"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#363630" />
          <meta name="msapplication-TileColor" content="#f8d948" />
          <meta name="theme-color" content="#f8d948" />
        </Head>
        <body className="overflow-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
