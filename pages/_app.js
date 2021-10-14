import { useEffect } from "react";
const KEY_LINE_LIFF = "1656533574-jOJ3rRv4";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    (async () => {
      await initialLineLiff();
      new window.VConsole();
    })();
  }, []);

  const initialLineLiff = async () => {
    await liff
      .init({ liffId: KEY_LINE_LIFF })
      .then(() => console.log(":: Liff init ::"));
  };

  return <Component {...pageProps} />;
}

export default MyApp;
