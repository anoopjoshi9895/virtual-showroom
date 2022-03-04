import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/layout/layout";
import { CarConfigurationProvider } from "../context/configureContext";
import "../styles/sass/common.scss";
import "../styles/sass/showroom.scss";
import "../styles/speedometer.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarConfigurationProvider>
      <Layout>
        <Head>
          <title>BMW Virtual Showroom</title>
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </CarConfigurationProvider>
  );
}

export default MyApp;
