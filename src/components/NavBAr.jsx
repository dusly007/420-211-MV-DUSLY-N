import React from 'react'
import { Link } from 'react-router-dom'
function NavBAr() {
  return (
    <nav>
        <Link to="/home">Home</Link>
        <Link to="/portefolioPage">portefolioPage</Link>
        <Link to="/projectForm">projectForm</Link>
        <Link to="/interest">  Interest </Link>
    </nav>
  )
}

export default NavBAr
