import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [useLocaiton, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.href);
    console.log(":: before ::");
    const queryString = decodeURIComponent(window.location.search).replace(
      "?liff.state=",
      ""
    );
    console.log("url", queryString);
    if (queryString) {
      router.push(`${queryString}`);
    }
  });

  // useEffect(() => {

  // }, []);

  return <div className="container">Home {useLocaiton}</div>;
}
