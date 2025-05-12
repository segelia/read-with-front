import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = () => {
  return (
    <h2>Functional CARD component</h2>

  );
};

const App = () => {
  return (
    <div>
      <h2>Functional arrow component</h2>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>

  );
};


export default App
