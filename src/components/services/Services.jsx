import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>What to expect from me</h2>
      <div className="container services-container">
        <article className="service">
          <div className="service-head">
            <h3>Soft Skills</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Eagerness to learn, I'm motivated to deepen my web development
                knowledge.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Teamwork. I have learned during career and my time at Ironhack
                that working with your team is of uttermost importance.
              </p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>
                Perseverance, gaining a solid knowledge of any subject takes
                time and effort.{' '}
              </p>
            </li>
          </ul>
        </article>
        {/* END OF SOFT SKILLS */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Deep knowledege in HTML, CSS and JavaScript</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Backend Knowledge including NodeJS, Express.js and MongoDb</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>React knowledge including Components and Hooks</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Currently learning mySQL to improve my development skills</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
