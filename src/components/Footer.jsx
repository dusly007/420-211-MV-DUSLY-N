import React from 'react';
import './footer.css'; 

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Épreuve Finale Dusly Nestor</p>
    </footer>
  );
}

//{new Date().getFullYear()
//reference: https://www.w3schools.com/jsref/jsref_getfullyear.asp