import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import FirstPage from "./components/FirstPage";
import AllIcons from './components/storybookHelpers/AllIcons.js';
import ColorsList from './components/storybookHelpers/ColorsList.js';
import { ReactComponent as SmileSvg }  from './assets/images/icon-smile.svg';

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SmileSvg className='smile-icon' />
      <br />
      <AllIcons />
      <ColorsList />
    </div>
  );
}

export default App;
