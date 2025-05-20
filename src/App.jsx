import { useState } from 'react'
import PortfolioPage from './pages/portfolioPage'
import ProjectForm from './pages/projectForm'
import Interest from './pages/interest'
import Home from './pages/Home'
import NavBAr from './components/NavBAr'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {  Routes, Route } from "react-router-dom"
import projet from './assets/projets'

function App() {
  const [projects, setProjects] = useState(projet);

  const handleAdd = (newProject) => {
    setProjects((prevProjects) => [...prevProjects, newProject]);
  };

  return(
    <div className="app-wrapper">
      <Header/>
      <NavBAr></NavBAr>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portefolioPage" element={<PortfolioPage projects={projects} />} />
        <Route path="/projectForm" element={<ProjectForm onAdd={handleAdd}/>} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
      <Footer/>
    </div>
  
  )
}


export default App
