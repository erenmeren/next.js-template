import type { AppProps } from "next/app";
import Head from "next/head";
import "@/assets/css/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hello title !!!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
