import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Adbanner from './components/Adbanner';
import Book from './components/Book';
import Footer from './components/Footer';


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
      <Adbanner />
      <div className='separator'></div>
      <h1 className='book-grid-title'>Books recently added by your friends</h1>
      <div className='book-grid'>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
      </div>
      <Footer />
    </div>

  );
};


export default App
