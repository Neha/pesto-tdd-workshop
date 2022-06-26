import './App.css';
import React from 'react';
import Home from './Components/Home';

interface props {}

const App : React.FC<props> = () =>{
  return (
    <div className="app">
       <Home />
    </div>
  );
}

export default App;
