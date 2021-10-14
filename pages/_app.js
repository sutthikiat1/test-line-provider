import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    new window.VConsole();
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
