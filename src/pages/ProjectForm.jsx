import React, { useState } from 'react';
import "./projectForm.css"


function ProjectForm({ onAdd }) {
  const [form, setForm] = useState({
    titre: '',
    description: '',
    techs: ''
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  
  function handleClick(event) {
    event.preventDefault(); // empêcher le rafraîchissement
    form.titre && form.description
      ? (onAdd(form), setForm({ titre: '', description: '', techs: '' }))
      : null;
  }
  return (
    <div>
      <h1>projectForm</h1>
      <form className='projet-form'>
        <h2 className="titre">Ajouter un projet</h2>

      <label>Titre</label>
      <input
        name="titre"
        value={form.titre}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        required
      />

      {/* pt des checkbox ou autre avec plusieurs options de techno*/}
      <label>Technologies</label>
      <input
        name="techs"
        value={form.techs}
        onChange={handleChange}
      />

      <button type="submit" onClick={handleClick}>Ajouter</button>
      </form>  
    </div>
  )
}

export default ProjectForm
