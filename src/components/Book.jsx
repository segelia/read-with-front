import React from 'react';
import './Book.css';

const Book = ({ title, imageUrl }) => {
  return (
    <div className="book">
      <img src={imageUrl} alt={title} className="book-cover" />
      <p className="book-title">{title}</p>
    </div>
  );
};

export default Book;
