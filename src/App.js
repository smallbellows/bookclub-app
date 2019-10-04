import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { endpoint } from './config';
import './App.css';
import BookList from './components/BookList';
const client = new ApolloClient({
    uri: endpoint
});
function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">
                    <h1>Welcome to Book Club</h1>
                </header>
                <BookList />
            </div>
        </ApolloProvider>
    );
}

export default App;
