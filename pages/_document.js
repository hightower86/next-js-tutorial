import Document, { Head, Main, NextScript } from 'next/document';
//import React, { Component } from 'react';
//import '../scss/style.scss';
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* <link rel='stylesheet' href='/_next/static/style.css' /> */}
          {/* <title>Next JS Awesome Kit</title> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
