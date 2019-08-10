import React from "react";
import axios from "axios";
import NavBar from "../../components/nav/nav";
import SearchResults from "../../components/search/search_results";
import SearchBar from "../../components/search/search_bar";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            currentQuery: localStorage.getItem("currentQuery"),
            index: "monsters",
            showResults: false
        };
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.storeCurrentSearch = this.storeCurrentSearch.bind(this);
        this.resultsSection = React.createRef();
    }

    handleKeyDown = e => {
        if (e.key === "Enter") {
            this.setState({ showResults: true, searchResults: [] });
            axios
                .get("https://api.pad-db.com/search/" + e.target.value)
                .then(response => {
                    this.setState({ searchResults: response.data });
                    this.resultsSection.current.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };

    storeCurrentSearch = e => {
        localStorage.setItem("currentQuery", e.target.value);
        this.setState({ currentQuery: e.target.value });
    };

    render() {
        return (
            <div>
                <NavBar />
                <section className="hero is-dark is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">
                                Welcome to the PAD DB search engine!
                            </p>
                            <p className="subtitle">
                                This search engine is works through a custom
                                query engine powered by the magic of
                                ElasticSearch.
                            </p>
                            <div className="field has-addons">
                                <p className="control">
                                    <span className="select is-rounded">
                                        <select>
                                            <option>Monsters</option>
                                        </select>
                                    </span>
                                </p>
                                <SearchBar
                                    handleKeyDown={this.handleKeyDown}
                                    storeCurrentSearch={this.storeCurrentSearch}
                                    currentQuery={this.state.currentQuery}
                                />
                            </div>
                            <p className="subtitle top-margin">
                                Check out the guide at{" "}
                                <a
                                    className="has-text-link"
                                    href={"/search-guide/"}
                                >
                                    /search-guide/
                                </a>
                                to learn about how to query data.
                            </p>
                        </div>
                    </div>
                </section>
                <div ref={this.resultsSection}>
                    <SearchResults
                        searchResults={this.state.searchResults}
                        index={this.state.index}
                        showResults={this.state.showResults}
                    />
                </div>
            </div>
        );
    }
}

export default Search;
