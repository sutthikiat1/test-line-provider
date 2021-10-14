import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [useLocaiton, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.href);
    if (!liff.isLoggedIn()) {
      liff.login({ redirectUri: `${window.location.href}/abc` });
    }
  });

  return <div className="container">Home {useLocaiton}</div>;
}
