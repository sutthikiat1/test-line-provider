import { useEffect, useState } from "react";
const KEY_LINE_LIFF = "1656533574-jOJ3rRv4";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const queryString = decodeURIComponent(window.location.search).replace(
      "?liff.state=",
      ""
    );
    console.log("url", queryString);
    if (queryString) {
      router.push(`${queryString}`);
    }
  }, []);

  return <div className="container">Home</div>;
}
