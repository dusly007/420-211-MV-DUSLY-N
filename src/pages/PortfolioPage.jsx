import React from 'react'
import "./portFolioPage.css"

import { useState } from 'react'
import projet from '../assets/projets.js'
import avatarImage from '../assets/avataaars.png' 
function PortfolioPage() {
 
  const [projects, setProjects] = useState(projet)
  // il faudra une fonction pour ajouter projet(pt dans App ou dans Form)
  function handleAdd(newProject) {
    setProjects(prev => [...prev, newProject]);
  }


  return (
    <div className='portfolio-page'>
      <main className='portfolio-contenu'>
        <h1 className='portfolio-titre'>portfolioPage</h1>
        <section className='section-personnelle'>
          <h2 className='titre'>Présentation personnelle</h2>
          <div className='contenu-personnelle'>
            {/*https://getavataaars.com/?accessoriesType=Blank&avatarStyle=Circle&clotheColor=Red&clotheType=Hoodie&eyeType=Default&eyebrowType=RaisedExcitedNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&graphicType=Diamond&hairColor=Black&mouthType=Smile&skinColor=Black&topType=LongHairDreads*/}
            <img src={avatarImage} alt="Mon Avatar" className='avatar' />
            <div className='text-contenu-personnelle'>
              <h3 className='nom'>Dusly Nestor</h3>
              <p className='traits'>Je suis compétitif, persévérant, drôle, curieux de nature et toujours prêt à apprendre de nouvelles choses.</p>
              <p className='interets'>
              <strong>Intérêts professionnels :</strong> informatique en général, développement web, devenir entrepreneur<br />
              <strong>Passions : </strong>regarder et faire du sport(principalement le basket)<br />
              <strong>Loisirs:</strong> jeux video, gym
              </p>
            </div>
          </div>
        </section>

        <section className='section-professionnelle'>
          <h2 className='titre'>Présentation professionnelle</h2>
          <div className='contenu-professionnelle'>
            <p> J’ai commencé mon parcours scolaire au secondaire Antoine-de-Saint-Exupéry, poursuivi au cégep de Rosemont, et je suis actuellement étudiant au cégep Marie-Victorin, où je me spécialise en informatique.</p>
            <p> Côté professionnel, j’ai occupé différents postes(en voici certains) : d’abord dans l’entretien ménager, ensuite dans le secteur bancaire en tant que représentant au service financier, et aujourd’hui, je travaille chez FedEx comme livreur. Ces expériences m’ont appris la rigueur, le contact client et la gestion du temps.</p>
            <p>En dehors de l’école, j’ai toujours été très impliqué. J’ai fait partie des équipes de basketball de mes établissements précédents, ce qui m’a appris l’esprit d’équipe et la discipline. Ce sont des valeurs que je garde dans tout ce que j’entreprends.</p>
          </div>
        </section>

        <section>
          <h2>Projets informatiques</h2>
          <ul className="liste-projets">
            {projects.map((proj, index) => (
              <li key={index} className="projet">
                <h3>{proj.titre}</h3>
                <p>{proj.description}</p>
                <p><strong>Technos :</strong> {proj.techs}</p>
              </li>
            ))}
          </ul>
      
        </section>
      </main>
    </div>
  )
}

export default PortfolioPage
