import React from 'react';
import axios from 'axios';
import NavBar from '../../components/nav/nav'
import SearchResults from '../../components/search/search_results';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'searchResults': [], 'currentQuery': '', 'isSearching': false, 'index': 'monsters', 'showResults': false};
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.storeCurrentSearch = this.storeCurrentSearch.bind(this);
        this.goToTop = this.goToTop.bind(this);
        this.resultsSection = React.createRef();
        this.topSection = React.createRef()
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.setState({'isSearching': true, 'showResults': true});
            axios.get('https://api.pad-db.com/search/' + e.target.value)
                .then((response) => {
                    this.setState({'searchResults': response.data, 'isSearching': false});
                    this.resultsSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
                }).catch((error) => {
                    console.log(error)
                }
            );
        }
    };

    goToTop= (e) => {
        if (e.key === 'Enter') {
            this.topSection.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    }

    storeCurrentSearch = (e) => {
        this.setState({'currentQuery': e.target.value});
    };

    render() {
        return (
            <div>
                <NavBar/>
                <section className="hero is-dark is-fullheight-with-navbar" ref={this.topSection}>
                    <div className="hero-body">
                        <div className="container">
                            <p className="title">
                                Welcome to the PAD DB search engine!
                            </p>
                            <p className="subtitle">
                                This search engine is a beta test of my query system powered by ElasticSearch.
                            </p>
                            <div className="field has-addons">
                                <p className="control">
                                    <span className="select is-large is-rounded">
                                      <select>
                                        <option>Monsters</option>
                                      </select>
                                    </span>
                                </p>
                                <div className="control is-expanded is-large">
                                    <input id='search' className="input is-rounded is-large" type="text"
                                           placeholder="Ex. attribute = wood and awakenings = 7c, unbindable"
                                           onKeyDown={this.handleKeyDown}
                                           onChange={this.storeCurrentSearch}
                                           value={this.state.currentQuery}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div ref={this.resultsSection}>
                    <SearchResults searchResults={this.state.searchResults} isSearching={this.state.isSearching}
                                   index={this.state.index} showResults={this.state.showResults} />
                </div>
            </div>
        );
    }
}

export default Search;