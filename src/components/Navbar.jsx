import React from 'react';
import './Navbar.css';
import { Heart, BookOpen, User, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">ReadWith</span>
        <div className="navbar-search">
          <input type="text" placeholder="Szukaj książki..." />
          <button>
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className="navbar-right">
        <div className="nav-item">
          <Heart size={20} />
          <span>Ulubione</span>
        </div>
        <div className="nav-item">
          <BookOpen size={20} />
          <span>Moje książki</span>
        </div>
        <div className="nav-item">
          <User size={20} />
          <span>Zaloguj się</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
