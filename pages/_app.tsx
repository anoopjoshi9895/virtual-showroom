import type { AppProps } from "next/app";
import { CarConfigurationProvider } from "../context/configureContext";
import "../styles/sass/common.scss";
import "../styles/sass/showroom.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarConfigurationProvider>
      <Component {...pageProps} />
    </CarConfigurationProvider>
  );
}

export default MyApp;
