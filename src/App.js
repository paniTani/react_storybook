import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import FirstPage from "./components/FirstPage";
import { ReactComponent as SmileSvg }  from './assets/images/icon-smile.svg';

function App() {
  return (
    <div className="App">
      <FirstPage />
      <SmileSvg className='smile-icon' />
    </div>
  );
}

export default App;
