import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const KEY_LINE_LIFF = "1656533574-jOJ3rRv4";
export default function Home() {
  const router = useRouter();
  const [useLocaiton, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.href);
  });

  useEffect(() => {
    (async () => {
      await initialLineLiff();
    })();
  }, []);

  const initialLineLiff = async () => {
    await liff
      .init({ liffId: KEY_LINE_LIFF })
      .then(() => console.log(":: Liff init ::"));
  };

  return <div className="container">Home {useLocaiton}</div>;
}
