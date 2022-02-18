import type { AppProps } from "next/app";
import { Layout } from "../components/layout/layout";
import { CarConfigurationProvider } from "../context/configureContext";
import "../styles/sass/common.scss";
import "../styles/sass/showroom.scss";
import "../styles/speedometer.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarConfigurationProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CarConfigurationProvider>
  );
}

export default MyApp;
