import React from 'react';
import './portfolio.css';
import ElonMars from '../../assests/Elon.jpg';
// import Meetech from '../../assests/Meetech.jpg';
import IronPump from '../../assests/ironpump.jpg';

const data = [
  {
    id: 1,
    image: ElonMars,
    title: 'Elon-Mars',
    github: 'https://github.com/RafaMR/Project-1-Videogame-Elon-Mars',
    demo: 'https://elon-mars.netlify.app/'
  },
  // {
  //   id: 2,
  //   image: Meetech,
  //   title: 'Meetech',
  //   github: 'https://github.com/RafaMR/Project-2-Meetech.com',
  //   demo: 'https://meetech-app.herokuapp.com/'
  // },
  {
    id: 3,
    image: IronPump,
    title: 'IronPump',
    github: 'https://github.com/RafaMR/Project-3-IronPump',
    demo: 'https://ironpump.netlify.app'
  }
];

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
