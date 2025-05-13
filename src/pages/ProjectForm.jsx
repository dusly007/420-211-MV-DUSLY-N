import React, { useState } from 'react';

function ProjectForm() {
  const [form, setForm] = useState({
    titre: '',
    description: '',
    techs: ''
  })
  //il faudra surement un handlechange pour mettre a jour State
  //il faudra surement un handleSubmit pour rafraichissement de ma page
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
        onChange=""
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={form.description}
        onChange=""
        required
      />

      {/* pt des checkbox ou autre avec plusieurs options de techno*/}
      <label>Technologies</label>
      <input
        name="techs"
        value={form.techs}
        onChange=""
      />

      <button type="submit">Ajouter</button>
      </form>  
    </div>
  )
}

export default ProjectForm
