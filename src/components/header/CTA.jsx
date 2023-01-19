import React from 'react';
import CV from '../../assests/Rafael Merayo_Full Stack Developer Resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">
        Download my CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
};

export default CTA;
