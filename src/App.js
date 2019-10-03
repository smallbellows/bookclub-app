import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { endpoint } from "./config";
import "./App.css";
import BookSearch from './components/BookSearch';
const client = new ApolloClient({
  uri: endpoint
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to Book Club
          </p>
          <BookSearch/>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
