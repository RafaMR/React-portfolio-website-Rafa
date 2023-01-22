import React from 'react';
import './about.css';
import ME from '../../assests/image Rafa.png';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>
                I am a Sales Manager making my way to become Full Stack
                Developer.
              </small>
            </article>
            <article className="about-card">
              <FiUsers className="about-icon" />
              <h5>Let´s Connect</h5>
              <small>
                I am looking for my first opportunity to join a team as Full
                Stack Developer
              </small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>
                Three completed projects at Ironhack Web Development Bootcamp
              </small>
            </article>
          </div>

          <p>
            Hi, I’m Rafa, a Full-Stack Javascript developer with several years
            of experience in Sales teams at tech companies making my way to find
            my first experience and join a team as a developer. I possess a deep
            knowledge of web development technologies such as JavaScript (ES6),
            React, HTML 5, CSS, NodeJS, ExpressJS, Mongo Db and Axios.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
