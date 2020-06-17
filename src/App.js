import React from 'react';
// import logo from './logo.svg';
import BaseButton from './components/BaseButton.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <BaseButton yellow>Base Button</BaseButton>
      <BaseButton>Base Button</BaseButton>
    </div>
  );
}

export default App;
