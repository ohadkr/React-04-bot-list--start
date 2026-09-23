import { Card } from "./card";

export function List({ bots = [] }) {
  return (
    <div className="cards-list">
      <ul>
        {bots.map((bot) => (
          <li key={bot.id ?? `${bot.first_name}-${bot.country}`} className="card-item">
            <Card {...bot} />
          </li>
        ))}
      </ul>
    </div>
  );
}
