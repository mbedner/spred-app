import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Body from './components/Body';


function App() {


  return (
    <div className="App h-full flex">
      <Sidebar />
      <Body />
    </div>
  );
}

export default App;
