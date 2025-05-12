import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Card = ({title, rating}) => {
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    console.log(`${title} has been ${hasLiked}`)
  }, [hasLiked]);
  return (
    <div className = "card">
      <h2>{title}</h2>
      <button onClick={()=> setHasLiked(!hasLiked)}>
        {hasLiked ? "Liked!" : "Like"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className='card-container'>
      <Card title="My year of rest and relaxation" rating="5"/>
      <Card title="Lolita" rating = "3"/>
      <Card title="The old man and the sea" rating ="4"/>
    </div>

  );
};


export default App
