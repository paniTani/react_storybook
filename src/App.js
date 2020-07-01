import React from 'react';
import 'antd/dist/antd.css';
import BaseButton from './components/BaseButton.js';
import './App.css';
import BaseInput from "./components/BaseInput";
import { ReactComponent as SmileSvg }  from './assets/images/icon-smile.svg';

function App() {
  return (
    <div className="App">
      <BaseButton yellow>Base Yellow Button</BaseButton>
      <BaseButton>Base Button</BaseButton>
      <br/>
      <BaseInput mt="20px" />
      <br/>
      <SmileSvg className='smile-icon' />
      <br/>
    </div>
  );
}

export default App;
