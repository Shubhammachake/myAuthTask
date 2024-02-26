import { useState, useEffect } from "react";

export default function Home() {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
    };

    const handleOffline = () => {
      setOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  console.log("I am online", online);

  return <div className="home">{!online && <h1>You are Offline</h1>}</div>;
}
