import React from "react";

class SearchResults extends React.Component {
    render() {
        return (
            <div>
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title">
                                Query Results
                            </p>
                        </div>
                        <div className='container is-fluid'>
                            <table className="table is-fullwidth is-hoverable">
                                <thead>
                                <tr>
                                    <th className="has-text-left">CARD ID</th>
                                    <th className="has-text-centered">NAME</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    this.props.searchResults.map(
                                        (result) => (
                                            <tr key={result.card_id}>
                                                <td className="has-text-left">{result.card_id}</td>
                                                <td className="has-text-centered">{result.name}</td>
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
}

export default SearchResults;