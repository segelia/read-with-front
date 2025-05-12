import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title, rating}) => {
  return (
    <div>
      <h2>{title}</h2>
      <h2>I rate it:{rating}</h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional arrow component</h2>
      <Card title="My year of rest and relaxation" rating="5" />
      <Card title="Lolita" rating = "3"/>
      <Card title="The old man and the sea" rating ="4"/>
      <Card />
    </div>

  );
};


export default App
