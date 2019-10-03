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
                    <p>Welcome to Book Club</p>
                    <BookList />
                </header>
            </div>
        </ApolloProvider>
    );
}

export default App;
