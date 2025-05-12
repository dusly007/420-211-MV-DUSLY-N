import React from 'react'
import "./portFolioPage.css"

function PortfolioPage() {
  return (
    <div className='portfolio-page'>
      <main className='portfolio-contenu'>
        <h1 className='portfolio-titre'>portfolioPage</h1>
        <section className='section-personnelle'>
          <h2 className='titre'>Présentation personnelle</h2>
          <div className='contenu-personnelle'>
            {/*RAJOUTE UNE IMAGE*/}
            <img src="" alt="Mon Avatar" className='avatar' />
            <div className='text-contenu-personnelle'>
              <h3 className='nom'>Dusly Nestor</h3>
              <p className='traits'>Je suis compétitif, persévérant, drôle, curieux de nature et toujours prêt à apprendre de nouvelles choses.</p>
              <p className='interets'>
              Intérêts professionnels : informatique en général, développement web, devenir entrepreneur<br />
              Passions : regarder et faire du sport(principalement le basket)<br />
              Loisirs: jeux video, gym
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Présentation professionnelle</h2>
        </section>

        <section>
          <h2>Projets informatiques</h2>
        </section>
      </main>
    </div>
  )
}

export default PortfolioPage
