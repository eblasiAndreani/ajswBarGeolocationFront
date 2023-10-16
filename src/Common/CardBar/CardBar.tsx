import React from 'react';
import './CardBar.css'

const CardBar = ({ title, address, description, imageUrl, onClick }) => {

  const handleCardClick = () => {
    // Ejecuta la acción cuando se hace clic en la tarjeta
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="custom-card" onClick={handleCardClick}>
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{address}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardBar;