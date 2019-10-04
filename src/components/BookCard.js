import PropTypes from 'prop-types';
import React from 'react';
import './BookCard.css';

const BookCard = book => {
    return (
        <div>
            <header>
                <h2>{book.title}</h2>
                {book.bookAuthor && <h3>by {book.bookAuthor}</h3>}
            </header>
            {book.coverUrl && <img src={book.coverUrl} alt={book.title} />}
        </div>
    );
};

BookCard.propTypes = {
    bookAuthor: PropTypes.string,
    bookId: PropTypes.number,
    coverUrl: PropTypes.string,
    termNames: PropTypes.arrayOf(PropTypes.string)
};
export default BookCard;
