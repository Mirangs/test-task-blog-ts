import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    )

    const styleTags = sheet.getStyleElement()

    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>{this.props.styleTags}</Head>
        <title>Simple NextJS SSR Blog</title>
        <meta name="keywords" content="nextjs,ssr,blog" />
        <meta
          name="description"
          content="This is simple NextJS test task blog"
        />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
