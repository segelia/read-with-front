import Adbanner from './Adbanner';
import Book from './Book';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <>
      <Adbanner />
      <div className='separator'></div>
      <h1 className='book-grid-title'>Books recently added by your friends</h1>
      <div className='book-grid'>
        <Link to="/book"><Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/></Link>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
        <Book title="Wschód słońca w dniu dozynek" imageUrl="src/assets/wschod-slonca-w-dniu-dozynek-b-iext179943591.jpg"/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
