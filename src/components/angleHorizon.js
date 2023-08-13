import React from 'react';

const AngleHorizon = ({ ADI }) => {
  const angle = parseInt(ADI);
  let color = '';

  if (angle === 100) {
    color = 'blue';
  } else if (angle === 0) {
    color = 'linear-gradient(90deg, blue 50%, green 50%)';
  } else if (angle === -100) {
    color = 'green';
  }

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: color,
      }}
    ></div>
  );
};


export default AngleHorizon;