import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import BookCard from './BookCard';
const BOOKS_SEARCH_QUERY = gql`
    query BOOKS_SEARCH_QUERY {
        books {
            nodes {
                bookAuthor
                bookId
                coverUrl
                content(format: RAW)
                title
                bookDate
            }
        }
    }
`;
const BookList = () => (
    <Query query={BOOKS_SEARCH_QUERY}>
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            if (!data.books.nodes.length) {
                return <p>No books found.</p>;
            }
            return data.books.nodes.map(book => {
                return <BookCard {...book} />;
            });
        }}
    </Query>
);

export default BookList;
