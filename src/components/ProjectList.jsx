import React from 'react'
{/*A REFAIRE*/}
export default function ProjectList({projects}){
    return (
        <div className="projets-liste">
          {projects.map((proj, idx) => (
            <div key={idx} className="projet">
              <h3 className="projet-titre">{proj.titre}</h3>
              <p className="projet-description">{proj.description}</p>
              {/* il manque La liste des technologies utilisées*/}
            </div>
          ))}
        </div>
      )
}