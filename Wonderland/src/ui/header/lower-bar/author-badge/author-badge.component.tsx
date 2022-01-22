import React from 'react';
import './author-badge.style.css';

export default function AuthorBadgeComponent() {
  return (
    <a href="https://redwars22.github.io/Website/index.html">
      <div className="author-badge-container">
        <span className="author-name">
          Criado por André Pereira(@Redwars22)
        </span>
        <img src="https://github.com/Redwars22.png" className="author-photo" />
      </div>
    </a>
  );
}
