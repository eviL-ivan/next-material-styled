import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { StylesProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../core/theme/theme";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Container>
            <Head>
              <title>My page</title>
            </Head>

            <CssBaseline />
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </StylesProvider>
    );
  }
}

export default MyApp;
