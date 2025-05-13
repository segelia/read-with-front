import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';


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
    <div>
      <Navbar />
      <div className='card-container'>
        <Card title="My year of rest and relaxation" rating="5"/>
        <Card title="Lolita" rating = "3"/>
        <Card title="The old man and the sea" rating ="4"/>
      </div>
    </div>

  );
};


export default App
