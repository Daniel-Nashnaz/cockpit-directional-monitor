import React from 'react';

const StandTall = ({ altitude }) => {
  // Calculate the position of the marker
  const markerPosition = altitude / 3000 * 100;

  return (
    <div style={{ width: '100px', height: '500px', border: '1px solid black', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgray' }} />
      <div style={{ width: '100%', height: '2px', position: 'absolute', top: `${100 - markerPosition}%`, backgroundColor: 'black' }} />
      <div style={{ width: '100%', height: '5%', position: 'absolute', bottom: "0%", textAlign: 'center' }}>0</div>
      <div style={{ width: '100%', height: '33.33%', position: 'absolute', bottom: '8%', textAlign: 'center' }}>1000</div>
      <div style={{ width: '100%', height: '33.33%', position: 'absolute', bottom: '38%', textAlign: 'center' }}>2000</div>
      <div style={{ width: '100%', height: '33.33%', position: 'absolute', bottom: '65%', textAlign: 'center' }}>3000</div>

    </div>
  );

};

export default StandTall;