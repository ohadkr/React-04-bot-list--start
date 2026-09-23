import { useEffect, useState } from "react";
import { List } from "./list";

export function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchBots = async () => {
      const response = await fetch(
        "https://api.npoint.io/86690d80ff3d455133f0"
      );
      const data = await response.json();
      setBots(data);
    };

    fetchBots();
  }, []);

  return (
    <div className="app">
      <div className="header">
        <h1 className="headline white-text">Show me the list!</h1>
      </div>
      <List bots={bots} />
    </div>
  );
}
