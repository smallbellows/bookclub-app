import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './BookList.css';
import BookCard from './BookCard';
export const ALL_BOOKS_QUERY = gql`
    query ALL_BOOKS_QUERY {
        books {
            nodes {
                bookAuthor
                bookId
                coverUrl
                title
                termNames(taxonomies: CATEGORY)
            }
        }
    }
`;
const BookList = () => (
    <ul>
        <Query query={ALL_BOOKS_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                if (!data.books.nodes.length) {
                    return <p>No books found.</p>;
                }
                return data.books.nodes.map(book => {
                    return (
                        <li key={book.bookId}>
                            <BookCard {...book} />
                        </li>
                    );
                });
            }}
        </Query>
    </ul>
);

export default BookList;
