import React, { Component } from 'react';
import './styles.css';

export default class MonsterAPI extends Component {
    render() {
        return (
            <div className="box" id="monsters">
                <div className="main-title columns is-desktop is-centered">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Monsters</h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container is-fluid has-bottom-margin">
                            <div>
                                The PAD DB Search Engine provides an intuitive way to filter PAD data through a lightweight
                                query system powered by the magic of ElasticSearch.
                            </div>
                            <div>
                                The engine accepts the logical operators for functions like "greater than", "less than",
                                and "equals"
                                as well as certain key words, such as "and" to filter down data based on a set of given
                                specifications.
                            </div>
                            <div>
                                Consider the following query:
                            </div>
                            <div>
                                <pre>
                                    <code>
                                        attribute = wood and awakenings = 7c, unbindable
                                    </code>
                                </pre>
                            </div>
                            <div>
                                This query searches for all monsters that have an "attribute" value of "wood", then
                                reduces that result set down
                                by the monsters that have both a 7C (Enhanced Combo) and Unbindable (Resistance Bind)
                                awoken skill.
                            </div>
                            <div>
                                If we wanted to filter this down even more, we could add another clause of
                            </div>
                            <div>
                                <pre>
                                    <code>
                                        type = dragon, god
                                    </code>
                                </pre>
                            </div>
                            <div>
                                To give us a final query of
                            </div>
                            <div>
                                <pre>
                                    <code>
                                        attribute = wood and awakenings = 7c, unbindable and type = dragon, god
                                    </code>
                                </pre>
                            </div>
                            <div>
                                Try copying this query into the search engine and see what you find.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}