

import './App.css';
import DataDisplay from './pages/controlMain';

function App() {
  const degrees = 100;
  return (
    <div className="App">


      <DataDisplay />

    </div>
  );
}

const Circles = ({ number }) => {


  return (
    <div style={styles.circle}>
      <div style={styles.sideTop}>0</div>
      <div style={styles.sideRight}>90</div>
      <div style={styles.sideBottom}>180</div>
      <div style={styles.sideLeft}>270</div>
    </div>
  );
};



const styles = {
  circle: {
    position: 'relative',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    border: '2px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  sideTop: {
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  sideRight: {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translateY(-50%)',
  },
  sideBottom: {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  sideLeft: {
    position: 'absolute',
    top: '50%',
    left: '0',
    transform: 'translateY(-50%)',
  },
};

export default App;
