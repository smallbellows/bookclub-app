import PropTypes from 'prop-types';
import React from 'react';

const BookCard = book => {
    return (
        <div>
            <h2>{book.title}</h2>
            {book.bookAuthor && <h3>by {book.bookAuthor}</h3>}
            {book.coverUrl && <img src={book.coverUrl} alt={book.title} />}
        </div>
    );
};

BookCard.propTypes = {
    bookAuthor: PropTypes.string,
    bookId: PropTypes.string,
    coverUrl: PropTypes.string,
    content: PropTypes.string,
    title: PropTypes.string,
    bookDate: PropTypes.string,
    termNames: PropTypes.arrayOf(PropTypes.string)
};
export default BookCard;
