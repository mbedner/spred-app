import React, {useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Modal from './components/Modal';

function App() {
  
  const [isShowing, setIsShowing] = useState(true)

  // const modal = document.querySelector('modal')

  return (
    <div className="App h-full flex">
      <Sidebar />
      <Body />
      <Modal show={isShowing}/>
    </div>
  );
}

export default App;
