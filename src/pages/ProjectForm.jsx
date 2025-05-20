import React, { useState } from 'react';
import "./projectForm.css"


function ProjectForm() {
  const [form, setForm] = useState({
    titre: '',
    description: '',
    techs: ''
  })
  //il faudra surement un handlechange pour mettre a jour State
    function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }
  //il faudra surement un handleSubmit pour rafraichissement de ma page
  function handleClick(event) {
    event.preventDefault(); // empêcher le rafraîchissement
    form.titre && form.description
      ? (onAdd(form), setForm({ titre: '', description: '', techs: '' }))
      : null;
  }
  return (
    <div>
      <h1>projectForm</h1>
      {/*il faudra le handleSubmit dans mon form*/}
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
