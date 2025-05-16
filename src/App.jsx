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


function App() {


  return(
    <>
      <Header/>
      <NavBAr></NavBAr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portefolioPage" element={<PortfolioPage />} />
        <Route path="/projectForm" element={<ProjectForm />} />
        <Route path="/interest" element={<Interest />} />
      </Routes>
      <Footer/>
    </>
  
  )
}


export default App
