import React from 'react';
import './portfolio.css';
// import IronZombie from '../../assets/Ironzombie.png';
// import GuessWhoWon from '../../assets/Guesswhowon.png';
// import IronPump from '../../assets/Ironpump.png';

// const data = [
//   {
//     id: 1,
//     image: IronZombie,
//     title: 'IronZombie',
//     github: 'https://github.com/UmarBer/Module-1-game-project',
//     demo: 'https://ironzombies.netlify.app'
//   },
//   {
//     id: 2,
//     image: GuessWhoWon,
//     title: 'Guess Who Won',
//     github: 'https://github.com/UmarBer/whowon',
//     demo: 'https://guesswhowon.herokuapp.com/'
//   },
//   {
//     id: 3,
//     image: IronPump,
//     title: 'IronPump',
//     github: 'https://github.com/UmarBer/Project-3---IronPump',
//     demo: 'https://ironpump.netlify.app'
//   }
// ];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  className="btn"
                  rel="noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  rel="noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
