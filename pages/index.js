import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const [useLocaiton, setLocation] = useState("");
  useEffect(() => {
    setLocation(window.location.href);
  });

  return <div className="container">Home {useLocaiton}</div>;
}
