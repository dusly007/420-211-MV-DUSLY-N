import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avataaars.png';
import './Home.css';
import citations from '../assets/citations'; 


function Citations({ text }) {
  return (
    <p className="citation">💡 {text}</p>
  );
}

export default function Home() {
  const random = citations[Math.floor(Math.random() * citations.length)];

  return (
    <div className="home">
      <h1>Bienvenue sur mon Portfolio</h1>
      <p>Je suis Dusly Nestor, étudiant en informatique passionné par le développement web.</p>
      <img src={avatar} alt="avatar" className="avatar-home" />

      <Citations text={random} />

      <div className="home-buttons">
        <Link to="/portefolioPage" className="btn">📁 Voir mes projets</Link>
        <Link to="/projectForm" className="btn">➕ Ajouter un projet</Link>
        <Link to="/interest" className="btn">💬 Voir mes interêts</Link>
      </div>
    </div>
  );
}
