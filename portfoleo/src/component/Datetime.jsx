import { useState, useEffect } from "react";

function Datetime() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  const formattedTime = now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return <span>{formattedTime.replace(",","")}</span>;
}

export default Datetime;
