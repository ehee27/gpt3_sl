import React from 'react';
import './feature.css';

// The Feature component is a child of "whatGPT" - think of it as a card.
// accepts 2 props to render 1. title 2. text
const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
