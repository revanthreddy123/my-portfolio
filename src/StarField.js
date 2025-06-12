// src/StarField.js
import React, { useEffect } from 'react';
import './App.css';

const StarField = () => {
  useEffect(() => {
    const container = document.querySelector('.celestial-bodies');

    if (!container) return;

    const createCelestialBody = (type) => {
      const star = document.createElement('div');
      star.className = type;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${Math.random() * 20 + 15}s`;

      const orbit = document.createElement('div');
      orbit.className = 'orbit';
      orbit.style.animationDuration = `${Math.random() * 40 + 15}s`;

      orbit.appendChild(star);
      container.appendChild(orbit);
    };

    for (let i = 0; i < 200; i++) createCelestialBody('star');
    for (let i = 0; i < 20; i++) createCelestialBody('bright-star');

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div className="celestial-bodies"></div>;
};

export default StarField;
