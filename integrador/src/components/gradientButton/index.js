import React from 'react';

export const DegradeeButton = ({ children }) => {
  const estiloBotao = {
    backgroundColor: '#FF6489',
    backgroundImage: 'linear-gradient(to right, #FF6489, #F9B24E)',
    borderRadius: '20px',
    color: 'white',
    width: '90%',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  return (
    <button style={estiloBotao}>{children}</button>
  );
};
