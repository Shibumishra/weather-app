import React, { Component } from 'react';
import "./SearchBar.css";

export class SearchBar extends Component {
    constructor(props) {
        super(props);
    }

    onInputChange(e) {
        this.props.inputChange(e);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.formSubmitted();
    }


    render() {
        const location = this.props.location;

        return (
            <div className="search-bar">
                <form className="search-bar__form" onSubmit={(e) => this.onFormSubmit(e)}>
                    <input
                        name="search"
                        id="search"
                        value={location}
                        className="search-bar__input"
                        onChange={(e) =>
                            this.onInputChange(e)}
                    >
                    </input>
                    <button type="submit" className="search-bar__button">
                        Search
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar
