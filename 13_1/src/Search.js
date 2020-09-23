import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ term: event.target.value });
        this.props.onSearch(event.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
            <form className="form" onSubmit={this.handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Filter" />
            </form>
        );
    }

}

export default Search;