import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FullPageLoader } from "../loader";
import SpeedometerLoader from "../loader/speedometer-loader";

export const Layout = ({ children }: any) => {
  const [routeChangeOccuring, setRouteChangeOccuring] = useState(false);

  let router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setRouteChangeOccuring(true));
    router.events.on("routeChangeComplete", () =>
      setRouteChangeOccuring(false)
    );
    router.events.on("routeChangeError", () => setRouteChangeOccuring(false));
  }, []);
  return (
    <div>
      <div>
        {children}
        {routeChangeOccuring && <SpeedometerLoader></SpeedometerLoader>}
      </div>
    </div>
  );
};
