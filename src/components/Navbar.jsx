import React from 'react';
import './Navbar.css';
import { Heart, BookOpen, User, Search } from 'lucide-react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">ReadWith</Link>
        <div className="navbar-search">
          <input type="text" placeholder="Szukaj książki..." />
          <button>
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <Link to="/favourites" className="nav-item">
          <Heart size={20} />
          <span>Ulubione</span>
        </Link>
        <Link to="/my-books" className="nav-item">
          <BookOpen size={20} />
          <span>Moje książki</span>
        </Link>
        <Link to="/login" className="nav-item">
          <User size={20} />
          <span>Zaloguj się</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
