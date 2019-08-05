import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <section className="hero is-dark is-fullheight-with-navbar" ref={this.topSection}>
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">
                                Welcome to the PAD DB search engine!
                            </p>
                            <p className="subtitle">
                                This search engine is a beta test of my custom query engine powered by ElasticSearch.
                            </p>
                            <input id='search' className="input is-rounded is-large" type="text"
                                   placeholder="Ex. attribute = wood and awakenings = 7c, unbindable"
                                   onKeyDown={this.handleKeyDown}
                                   onChange={this.storeCurrentSearch}
                                   value={this.state.currentQuery}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default SearchBar;