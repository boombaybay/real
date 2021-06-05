import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Head from "next/head";
import { ReactQueryDevtools } from "react-query/devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link rel="stylesheet" type="text/css" href="/nprogress.css" />
          <link rel="icon" href="/drop.png" />
          <title>DropBox - DropBox Business</title>
        </Head>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
export default MyApp;
