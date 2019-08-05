import React from 'react';
import axios from 'axios';
import NavBar from '../../components/nav/nav'
import SearchResults from '../../components/search/search_results';
class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'searchResults': [], 'currentQuery': ''};
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.storeCurrentSearch = this.storeCurrentSearch.bind(this);
        this.resultsSection = React.createRef();
        this.topSection = React.createRef()
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            console.log(e.target.value);
            this.resultsSection.current.scrollIntoView({behavior: 'smooth', block: 'start'});
            axios.get('/search/' + e.target.value, {crossdomain: true})
                .then((response) => {
                    response.data.map((result) => console.log(result));
                    this.setState({'searchResults': response.data});
                }).catch((error) => {
                    console.log(error)
                }
            );
        }
    };

    storeCurrentSearch = (e) => {
        this.setState({'currentQuery': e.target.value});
        console.log(this.state.currentQuery);
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
                <div ref={this.resultsSection}>
                    <SearchResults searchResults={this.state.searchResults} />
                </div>
            </div>
        );
    }
}

export default Search;