import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import BookCard from './BookCard';

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

it('loads title and author, if set', () => {
    act(() => {
        render(<BookCard title="Title" bookAuthor="An Author" />, container);
    });
    expect(container.querySelector('h2').textContent).toBe('Title');
    expect(container.querySelector('h3').textContent).toBe('by An Author');

    act(() => {
        render(<BookCard />, container);
    });
    expect(container.textContent).toBeFalsy();
});

it('loads img element only if coverUrl provided', () => {
    act(() => {
        render(<BookCard />, container);
    });
    expect(container.querySelector('img')).toBeFalsy();

    const mockURL = 'http://google.com/';
    act(() => {
        render(<BookCard coverUrl={mockURL} title="Title" />, container);
    });
    expect(container.querySelector('img').src).toBe(mockURL);
    expect(container.querySelector('img').alt).toBe('Title');
});
