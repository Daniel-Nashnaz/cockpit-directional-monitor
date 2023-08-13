import { useState } from "react";
import StandTall from "./components/standTall";
import Compass from "./compass";
import AngleHorizon from "./components/angleHorizon";
const MainPage = ({ data }) => {
  const [displayMode, setDisplayMode] = useState('visual');

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  };

  return (
    <>
      <div>
        <button onClick={() => handleDisplayModeChange('visual')}>Visual</button>
        <button onClick={() => handleDisplayModeChange('text')}>Text</button>
        {data ? (<>
        
          {displayMode === 'visual' && (<>
          <div style={{ display:'flex' ,textAlign: 'center',marginLeft:'30%'}}>
          <div style={{margin:'10px'}}>
          <StandTall altitude={data.altitude} />
          </div>
          <div style={{margin:'200px'}}>
          <Compass degrees={data.HSI} />
          </div>
          <div style={{marginTop:'100px'}}>
          <AngleHorizon ADI={data.ADI} />
          </div>
          </div>
          </>

          )}

          {displayMode === 'text' && (
            <div>
              <p>Altitude: {data.altitude}</p>
              <p>HSI: {data.HSI}</p>
              <p>ADI: {data.ADI}</p>
            </div>
          )}


        </>) : (
          <p>Loading data...</p>
        )}

      </div>


    </>
  );
};

export default MainPage;