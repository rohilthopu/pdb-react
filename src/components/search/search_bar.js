import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="control is-expanded">
                <input
                    id="search"
                    className="input is-rounded"
                    type="text"
                    placeholder="Ex. attribute = wood and awakenings = 7c, unbindable"
                    onKeyDown={this.props.handleKeyDown}
                    onChange={this.props.storeCurrentSearch}
                    value={this.props.currentQuery}
                />
            </div>
        );
    }
}

export default SearchBar;
