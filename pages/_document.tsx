import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        {/* Open Graph Tag */}
        <meta property="og:title" name='title' content="Chessboard" key="og-title" />
        <meta property="og:description" name='description' content="Chessboard made for moonshot" key="og-description" />
        <meta property="og:image" name='image' content="/images/banner.jpg" key="og-image" />
        <meta property="og:url" content="https://chess-board-moonshot-bilal-mansuri.vercel.app/" key="og-url" />
        <meta property="og:site_name" content="Chessboard" key="og-sitename" />
        <meta property="og:type" content="website" key="og-type" />


        {/* Twitter Card Tag */}
        <meta name="twitter:site" content="@bilalmansuri2e" key="twitter-site" />
        <meta name="twitter:domain" content="https://chess-board-moonshot-bilal-mansuri.vercel.app/" key="twitter-domain" />
        <meta name="twitter:creator" content="@bilalmansuri2e" key="twitter-creator" />
        <meta name="twitter:title" content="Chessboard" key="twitter-title" />
        <meta name="twitter:description" content="Chessboard made for moonshot" key="twitter-description" />
        <meta name="twitter:image" content="/images/banner.jpg" key="twitter-image" />
        <meta name="twitter:card" content="Chessboard made for moonshot" key="twitter-card" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
