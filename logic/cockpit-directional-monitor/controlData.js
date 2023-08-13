/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Press any key to start entering values...', () => {
    
  rl.question('Enter Altitude (0 to 3000): ', (altitude) => {
    rl.question('Enter hsi (0 to 360): ', (hsi) => {
      rl.question('Enter ADI (-100 to 100): ', (adi) => {
        validtionData(altitude,hsi,adi);
        // Process the received values as per your requirements

        // Send the processed data back to the user interface software
        // You can choose the communication protocol of your choice here

        console.log('Data received successfully');

        rl.close();
      });
    });
  });
});

function validtionData(...parm) {
    parm.forEach(x=>console.log(x));
    
}
*/
const readline = require('readline');
const { getConnectedClient } = require('./server');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputData = {};
let connectedClient;

let interval =  setInterval(()=> main(),1000);

function collectAltitude() {
  rl.question('Enter altitude (0 to 3000): ', (altitude) => {
    if (!isValidAltitude(altitude)) {
      console.error('Invalid altitude.\nPlease enter a value between 0 and 3000.');
      collectAltitude(); 
    } else {
      inputData.altitude = parseInt(altitude);
      collectHIS();
    }
  });
}

function collectHIS() {
  rl.question('Enter hsi (0 to 360): ', (hsi) => {
    if (!isValidHIS(hsi)) {
      console.error('Invalid hsi.\nPlease enter a value between 0 and 360.');
      collectHIS(); 
    } else {
      inputData.hsi = parseInt(hsi);
      collectADI();
    }
  });
}

function collectADI() {
  rl.question('Enter ADI (-100 to 100): ', (adi) => {
    if (!isValidADI(adi)) {
      console.error('Invalid ADI.\nPlease enter a value between -100 and 100.');
      collectADI(); 
    } else {
      inputData.adi = parseInt(adi);
      processInput();
    }
  });
}

function main() {

  connectedClient = getConnectedClient();

  if (!connectedClient) {
    console.error('No client connected.');
    return;
  }

  clearInterval(interval);
  rl.question('Press any key to start entering values...', () => {
    collectAltitude();
  });
}

function processInput() {



  const processedAltitude = inputData.altitude;
  const processedHSI = inputData.hsi;
  const processedADI = inputData.adi;

  rl.close();

  const dataToSend = JSON.stringify({
    altitude: processedAltitude,
    HSI: processedHSI,
    ADI: processedADI,
  });

  connectedClient.send(dataToSend);
}

function isValidAltitude(altitude) {
  const altitudeNumber = parseInt(altitude);
  return !isNaN(altitudeNumber) && altitudeNumber >= 0 && altitudeNumber <= 3000;
}

function isValidHIS(hsi) {
  const hisNumber = parseInt(hsi);
  return !isNaN(hisNumber) && hisNumber >= 0 && hisNumber <= 360;
}

function isValidADI(adi) {
  const adiNumber = parseInt(adi);
  return !isNaN(adiNumber) && adiNumber >= -100 && adiNumber <= 100;
}