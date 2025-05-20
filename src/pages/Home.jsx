import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avataaars.png';
import './Home.css';

function Home() {
  const citations = [
    "Toujours apprendre, jamais abandonner.",
    "Le code, c’est de la poésie logique.",
    "Chaque bug est une opportunité de grandir.",
    "Le futur appartient à ceux qui codent tôt.",
    "Crée, casse, corrige, répète.",
  ];
  const random = citations[Math.floor(Math.random() * citations.length)];

  return (
    <div className="home">
      <h1>Bienvenue sur mon ePortfolio</h1>
      <p>Je suis Dusly Nestor, étudiant en informatique passionné par le développement web.</p>
      <img src={avatar} alt="avatar" className="avatar-home" />
      
      <p className="citation">💡 {random}</p>

      <div className="home-buttons">
        <Link to="/portefolioPage" className="btn">📁 Voir mes projets</Link>
        <Link to="/projectForm" className="btn">➕ Ajouter un projet</Link>
        <Link to="/interest" className="btn">💬 Voir mes interêts</Link>
      </div>
    </div>
  );
}

export default Home;
