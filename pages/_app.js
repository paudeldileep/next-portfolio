import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BasicLoader from "../components/Preloader/BasicLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  //states for loader
  const [loading, setLoading] = useState(false);

  //loader effect
  useEffect(() => {
    const handleStart = () => {
      setLoading(true);
    };
    const handleComplete = () => {
      setLoading(false);
    };

    //events
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && <BasicLoader />} <Component {...pageProps} />
    </>
  );
}

export default MyApp;
