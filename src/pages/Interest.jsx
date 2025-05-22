// src/pages/Interest.jsx
import React from 'react';
import './Interest.css';

export default function Interest() {
  const [players, setPlayers] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [searchInput, setSearchInput] = React.useState('');

  React.useEffect(() => {
    fetch('https://www.balldontlie.io/api/v1/players')
      .then(response => response.json())
      .then(data => setPlayers(data.data));
  }, []);

  return (
    <section className="interest-page">
      <h1>Joueurs NBA</h1>

        <button type="submit">Rechercher</button>
      

      <ul className="liste-joueurs">
        {players.map(player => (
          <li key={player.id} className="joueurs">
            <h3>{player.first_name} {player.last_name}</h3>
            <p>{player.team.full_name} - {player.position || 'N/A'}</p>
          </li>
        ))}
      </ul>


    </section>
  );
}