// src/components/Profile.tsx
import React from 'react';
import './Home.css'

interface ProfileProps {
  name: string;
  age: number;
  bio: string;
  email: string;
  role: string;
  stage: string;
  company: string;
}

const HomePage: React.FC<ProfileProps> = ({ name, age, bio,email,role,stage,company }) => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Profile</h1>
      <div className="profile-details">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Bio:</strong> {bio}
        </p>
        <p>
          <strong>E-mail:</strong> {email}
        </p>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Stage:</strong> {stage}
        </p>
        <p>
          <strong>Company:</strong> {company}
        </p>
      </div>
    </div>
  );
};

export default HomePage;
