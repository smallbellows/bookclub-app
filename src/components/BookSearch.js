import React, { Component } from 'react';

class BookSearch extends Component {
    state = {
        searchQuery: ''
    };

    handleInputChange(event) {
        const{ value }= event.target;
        this.setState({searchQuery: value});
    }

    handleSubmit() {
        
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        className="posts-search__search-field"
                        name="searchQuery"
                        value={this.state.searchQuery}
                        onChange={this.handleInputChange}
                        placeholder="Search for books to add…"
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default BookSearch;
