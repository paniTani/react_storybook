import React from 'react';
import 'antd/dist/antd.css';
import BaseButton from './components/BaseButton.js';
import './App.css';
import BaseInput from "./components/BaseInput";

function App() {
  return (
    <div className="App">
      <BaseButton yellow>Base Yellow Button</BaseButton>
      <BaseButton>Base Button</BaseButton>
      <br/>
      <BaseInput mt="20px" />
    </div>
  );
}

export default App;
