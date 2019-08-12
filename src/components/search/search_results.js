import React from "react";
import "./search_results.css";

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.getMonsterLink = this.getMonsterLink.bind(this);
        this.getImageLink = this.getImageLink.bind(this);
        this.makeAwokenSkills = this.makeAwokenSkills.bind(this);
        this.getPDXMonsterLink = this.getPDXMonsterLink.bind(this);
    }

    getMonsterLink(result) {
        return "/monster/" + String(result.card_id);
    }

    getPDXMonsterLink(result) {
        return (
            "http://www.puzzledragonx.com/en/monster.asp?n=" +
            String(result.card_id)
        );
    }

    getImageLink(result) {
        return (
            "https://api.pad-db.com/static/padimages/portrait/" +
            String(result.card_id) +
            ".png"
        );
    }

    getAwokenImageLink(skill) {
        return (
            "http://www.puzzledragonx.com/en/img/awokens/" +
            String(skill) +
            ".png"
        );
    }

    makeAwokenSkills(awokenSkills) {
        if (awokenSkills != null) {
            return (
                <div>
                    {awokenSkills.map(skill => (
                        <img
                            src={this.getAwokenImageLink(skill)}
                            alt=""
                            className="a-little-space"
                            height="22"
                            width="22"
                        />
                    ))}
                </div>
            );
        }
        return <div />;
    }

    render() {
        if (this.props.showResults) {
            return (
                <div>
                    <section className="box is-fullheight">
                        <div className="container main-title">
                            <p className="title">Query Results</p>
                        </div>
                        <table className="table is-fullwidth is-hoverable bottom-space">
                            <thead>
                                <tr>
                                    <th className="has-text-left" />
                                    <th className="has-text-centered">NAME</th>
                                    <th className="has-text-centered">Link</th>
                                    <th className="has-text-centered">
                                        MAX HP
                                    </th>
                                    <th className="has-text-centered">
                                        MAX ATK
                                    </th>
                                    <th className="has-text-centered">
                                        MAX RCV
                                    </th>
                                    <th className="has-text-centered">
                                        AWOKEN SKILLS
                                    </th>
                                    <th className="has-text-centered">
                                        SUPER AWOKEN SKILLS
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.searchResults.map(result => (
                                    <tr key={result.card_id}>
                                        <td className="has-text-centered">
                                            <img
                                                src={this.getImageLink(result)}
                                                alt="pad_image"
                                                height="75"
                                                width="75"
                                            />
                                        </td>
                                        <td className="has-text-centered">
                                            {result.name}
                                        </td>
                                        <td className="has-text-centered">
                                            <a
                                                href={this.getMonsterLink(
                                                    result
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                PAD DB
                                            </a>
                                            {" / "}
                                            <a
                                                href={this.getPDXMonsterLink(
                                                    result
                                                )}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                PDX
                                            </a>
                                        </td>
                                        <td className="has-text-centered">
                                            {result.max_hp}
                                        </td>
                                        <td className="has-text-centered">
                                            {result.max_atk}
                                        </td>
                                        <td className="has-text-centered">
                                            {result.max_rcv}
                                        </td>
                                        <td className="has-text-centered">
                                            {this.makeAwokenSkills(
                                                result.awakenings_raw
                                            )}
                                        </td>
                                        <td className="has-text-centered">
                                            {this.makeAwokenSkills(
                                                result.super_awakenings_raw
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </div>
            );
        }
        return <div />;
    }
}

export default SearchResults;
