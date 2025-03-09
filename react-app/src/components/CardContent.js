import React from 'react';
import ButtonFooter from './ButtonFooter';

const CardContent = ({ name, description }) => (
  <div className="card-content">
    <div className="content">
      <div className="name">{name}</div>
      <div className="description">{description}</div>
    </div>
  </div>
);

export default CardContent;
