import React from 'react';
import HomePage from './HomePage';


const Home: React.FC = () => {
  const profileData = {
    name: 'Mohaideen',
    age: 17,
    bio: 'A software developer who loves programming.',
    email:'sheikmohaideen@gmail.com',
    role:"Web-App Developer and Website  Developer",
    stage:'Beginner-level',
    company:'skbeeZealarc'
  };

  return (
    <div>
      <div  className='section-background' ><h1 className='heading'  >My Profile</h1></div>
      <HomePage {...profileData} />
    </div>
  );
};

export default Home;
