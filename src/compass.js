// const User = ({ altitude, HIS, ADI }) => {
//   const [displayMode, setDisplayMode] = useState('visual'); // State variable for display mode

//   const elevationRotation = (altitude / 100) * 180; // Calculate rotation for elevation pointer
//   const compassRotation = (HIS / 360) * 360; // Calculate rotation for compass

//   // Determine the color of the horizon angle circle based on ADI value
//   let angleColor = 'green';
//   if (ADI === 100) {
//     angleColor = 'blue';
//   } else if (ADI === 0) {
//     angleColor = 'halfblue';
//   }

//   // Handle display mode change
//   const handleDisplayModeChange = (mode) => {
//     setDisplayMode(mode);
//   };

//   return (
//     <div>
//       {/* Display Mode Buttons */}
//       <button onClick={() => handleDisplayModeChange('visual')}>Visual</button>
//       <button onClick={() => handleDisplayModeChange('text')}>Text</button>

//       {/* Visual Controls */}
//       {displayMode === 'visual' && (
//         <svg width="400" height="400">
//           {/* Elevation Pointer */}
//           <g transform={`rotate(${elevationRotation} 200 200)`}>
//             <line x1="200" y1="200" x2="200" y2="300" stroke="black" strokeWidth="4" />
//             <polygon points="195,300 205,300 200,320" fill="blue" />
//           </g>

//           {/* Compass */}
//           <g transform={`rotate(${compassRotation} 200 200)`}>
//             <circle cx="200" cy="200" r="100" fill="none" stroke="black" strokeWidth="4" />
//             <line x1="200" y1="100" x2="200" y2="300" stroke="orange" strokeWidth="4" />
//             <line x1="155" y1="200" x2="245" y2="200" stroke="red" strokeWidth="4" />
//           </g>

//           {/* Horizon Angle */}
//           <circle cx="200" cy="200" r="150" fill={angleColor} />
//         </svg>
//       )}

//       {/* Text Display */}
//       {displayMode === 'text' && (
//         <div>
//           <p>Altitude: {altitude}</p>
//           <p>HIS: {HIS}</p>
//           <p>ADI: {ADI}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default User;

import React from 'react';

const Compass = ({ degrees }) => {
  const lineX = 50 + 40 * Math.cos((degrees - 90) * (Math.PI / 180));
  const lineY = 50 + 40 * Math.sin((degrees - 90) * (Math.PI / 180));

  // Calculate the coordinates of the arrow points
  const arrowWidth = 12;
  const arrowLength = 35;
  const arrowPoints = [
    [lineX, lineY],
    [lineX + arrowWidth / 2, lineY + arrowLength],
    [lineX - arrowWidth / 2, lineY + arrowLength]
  ];

  return (
    <svg width="150" height="250">

      <circle cx="50" cy="50" r="40" fill="lightblue" />

      {/* Rotate the arrow based on the degrees */}
      <polygon points={arrowPoints.map(point => point.join(',')).join(' ')} fill="red"
        transform={`rotate(${degrees}, ${lineX}, ${lineY})`} />

      <text x="50" y="10" fontSize="12" fill="black">0</text>
      <text x="90" y="50" fontSize="12" fill="black">90</text>
      <text x="45" y="100" fontSize="12" fill="black">180</text>
      <text x="0" y="50" fontSize="12" fill="black">270</text>
    </svg>
  );
};

export default Compass;
