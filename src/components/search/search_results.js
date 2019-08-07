import React from "react";
import './search_results.css'

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.getMonsterLink = this.getMonsterLink.bind(this);
    }

    getMonsterLink(result) {
        // return 'https://www.pad-db.com/monster/' + String(result.card_id)
        return 'http://www.puzzledragonx.com/en/monster.asp?n=' + String(result.card_id)
    }

    render() {

        if (this.props.showResults) {
            return (
                <div>
                    <section className="hero is-fullheight-with-navbar">
                        <div className="hero-head hero-head-margin">
                            <div className='container'>
                                <p className="title">
                                    Query Results
                                </p>
                            </div>
                        </div>
                        <div className='hero-body'>
                            <div className='container is-fluid'>
                                <table className="table is-fullwidth is-hoverable">
                                    <thead>
                                    <tr>
                                        <th className="has-text-left">CARD ID</th>
                                        <th className="has-text-centered">NAME</th>
                                        <th className="has-text-centered">MAX HP</th>
                                        <th className="has-text-centered">MAX ATK</th>
                                        <th className="has-text-centered">MAX RCV</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.props.searchResults.map(
                                            (result) => (
                                                <tr key={result.card_id}>
                                                    <td className="has-text-left">{result.card_id}</td>
                                                    <td className="has-text-centered"><a
                                                        href={this.getMonsterLink(result)}
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                        {result.name}</a></td>
                                                    <td className="has-text-centered">{result.max_hp}</td>
                                                    <td className="has-text-centered">{result.max_atk}</td>
                                                    <td className="has-text-centered">{result.max_rcv}</td>
                                                </tr>
                                            )
                                        )
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
        return (
            <div/>
        );
    }
}

export default SearchResults;