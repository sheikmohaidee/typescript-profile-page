import React from 'react';
import './About.css'; 

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content">
        <p>
        At 17 years old, I'm delving into the world of web development. Notably, I've already created over five websites, using various website creation tools. Now, I'm transitioning to programming, with a strong focus on learning React and TypeScript. While I'm just starting out on this coding journey, I'm excited to expand my skills and make a significant impact in the field of web development.
        </p>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
          alt="Sample Image"
        />
      </div>
    </div>
  );
};

export default About;
