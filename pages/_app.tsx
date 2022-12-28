import { ChakraProvider, ThemeProvider } from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import "../styles/globals.css";
import theme from "../styles/themes";
import type { AppProps } from "next/app";
import Router from "next/router";
import TopBarProgress from "react-topbar-progress-indicator";

export default function App({ Component, pageProps}: AppProps) {
  const [progress, setProgress] = React.useState(false);
  Router.events.on("routeChangeStart", () => {
    setProgress(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
  });
  TopBarProgress.config({
    barColors: {
      "0": "#400050",
      "0.5": "#CC00FF",
      "1.0": "#FF007A",
    },
  });

  const [showChild, setShowChild] = React.useState(false);
  React.useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Head>
        <title>Quasar Payment System</title>
        <meta name="description" content="An Innovative way to transactions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/qpsicon.png" />
        </Head>
        {progress && <TopBarProgress />}
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    );
  }
}
