import React from 'react';
import './Team.css';

const teamMembers = [
  {
    name: 'Niamh Shea',
    position: 'Co-founder & Executive',
    image: '/team1.webp',
  },
  {
    name: 'Orla Dwyer',
    position: 'Orla Dwyer',
    image: '/team2.webp',
  },
  {
    name: 'Danien James',
    position: 'Co-founder, Chairman',
    image: '/team3.webp',
  },
  {
    name: 'Dara Frazier',
    position: 'Chief Strategy Officer',
    image: '/team4.webp',
  },
  {
    name: 'Glenda Arvidson',
    position: 'HR Officer',
    image:'/team5.webp',
  },
  {
    name: 'Melvin Davis',
    position: 'Lead Developer',
    image: '/team6.webp',
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <h2 className="team-title">Our Team</h2>
      <p className="team-description">
        We’re impartial and independent, and every day we create distinctive, world-class reintermediate backend supply programmes.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
