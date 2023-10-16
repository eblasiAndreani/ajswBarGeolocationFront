import React from 'react';

const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="custom-label">
      {text}
    </label>
  );
};

export default Label;
