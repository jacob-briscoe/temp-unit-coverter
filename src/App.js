import React from 'react';
import './App.css';
import TempUnitConverter from './containers/TempUnitConverter';
import initModel from './model/model';

function App() {
  return (
    <TempUnitConverter initModel={initModel} />
  );
}

export default App;
