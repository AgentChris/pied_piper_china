import React, { Component } from 'react';
// import cd from './assets/cs_image.png';
// import piedpiper_gray from './assets/piedpier-gray.png';
// import piedpiper_red from './assets/piedpiper-red.png';
// import piedpiper_violet from './assets/piedpiper-violet.svg';
// import piedpiper_green from './assets/piedpiper-green.png';
// import './App.css';

const renderPiper = () => {
  let result = [];
  let leftSize = 80;
  for (let i = 0; i <= 100; i++) {
    if (i % 2) {
      result.push(
        <img src={piedpiper_red} className="footer-image-piper-red" style={{ left: leftSize * i }} />,
        <img src={piedpiper_green} className="footer-image-piper-green footer-image-piper" style={{ left: leftSize * i }} />
      );
    } else {
      result.push(
        <img src={piedpiper_red} className="footer-image-piper-red footer-image-piper" style={{ left: leftSize * i }} />,
        <img src={piedpiper_green} className="footer-image-piper-green footer-image-piper-invert" style={{ left: leftSize * i }} />
      );
    }
  }
  return result;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        we
      </div>
    );
  }
}

export default App;
