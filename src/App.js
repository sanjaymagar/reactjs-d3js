import React from 'react';
import './App.css';
import Gauge from './components';

const value = 70,
  min = 0,
  max = 100,
  label = 'Label',
  units = 'unit';

function App() {
  return (
    <div className='App'>
      <Gauge {...{ value, min, max, label, units }} />
    </div>
  );
}

export default App;
