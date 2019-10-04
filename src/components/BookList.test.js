import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { MockedProvider } from '@apollo/react-testing';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import { bookList } from './data/booklist.js';
import BookList, { ALL_BOOKS_QUERY } from './BookList';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('should render loading state', () => {
    const mocks = [
        {
            request: {
                query: ALL_BOOKS_QUERY
            },
            result: () => {
                return { data: [] };
            }
        }
    ];
    act(() => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BookList />
            </MockedProvider>,
            container
        );
    });
    expect(container.querySelector('p').textContent).toBe('Loading...');
});

it('should render error state', async () => {
    const mocks = [
        {
            request: {
                query: ALL_BOOKS_QUERY
            },
            error: new Error('error')
        }
    ];
    await act(async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BookList />
            </MockedProvider>,
            container
        );
        await wait(0);
    });

    const p = container.querySelector('p');
    expect(p.textContent).toContain('Error');
});

it('should render a BookCard for each book returned', async () => {
    const mocks = [
        {
            request: {
                query: ALL_BOOKS_QUERY
            },
            result: () => {
                return bookList;
            }
        }
    ];
    await act(async () => {
        render(
            <MockedProvider mocks={mocks} addTypename={false}>
                <BookList />
            </MockedProvider>,
            container
        );
        await wait(0);
    });
    const listItems = container.querySelectorAll('li');
    expect(listItems.length).toBe(bookList.data.books.nodes.length);
});
