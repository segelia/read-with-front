// src/App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favourites from './components/Favourites';
import Mybooks from './components/MyBooks';
import Login from './components/Login';
import Bookprofile from './components/Bookprofile';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/my-books" element={<Mybooks />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Bookprofile />} />
      </Routes>
    </div>
  );
};

export default App;
