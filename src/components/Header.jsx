import React from 'react';
import './header.css'; 

export default function Header() {
  return (
    <header className="header">
      <p>© {new Date().getFullYear()} Épreuve Finale Dusly Nestor</p>
    </header>
  );
}

//{new Date().getFullYear()
//reference: https://www.w3schools.com/jsref/jsref_getfullyear.asp