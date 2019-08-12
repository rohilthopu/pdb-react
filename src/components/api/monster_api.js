import React, { Component } from "react";
import "./styles.css";
import Axios from "axios";

export default class MonsterAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monsterExample: {}
        };
        this.monsterExampleURL = "https://api.pad-db.com/rest/monster/4204/";
    }

    componentDidMount() {
        Axios.get(this.monsterExampleURL)
            .then(response => {
                this.setState({ monsterExample: response.data });
            })
            .catch(err => {
                console.log("Error fetching example data: " + err);
            });
    }

    render() {
        return (
            <div id="monsters">
                <div className="columns is-desktop is-centered">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Monsters</h1>
                            <pre>
                                <code>/rest/monsters/</code>
                            </pre>
                            <pre>
                                <code>/rest/monster/&lt;int:card_id&gt;</code>
                            </pre>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container is-fluid has-bottom-margin">
                            <div className="box">
                                <div>
                                    I have two public API endpoints available
                                    for monsters.
                                </div>
                                <div>The first one,</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/monsters/
                                    </code>
                                </pre>
                                <div>
                                    returns a list of every monster object with
                                    every column available in the PAD DB
                                    database.
                                </div>
                            </div>
                            <div className="box">
                                <div>The second one</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/monster/&lt;int:card_id&gt;
                                    </code>
                                </pre>
                                <div>
                                    requires an additional value, the monsters
                                    integer ID value, and returns an single
                                    monster object
                                </div>
                                <pre>{this.monsterExampleURL}</pre>
                                <div>Returns the following:</div>
                                <pre>
                                    <code>
                                        {this.props.makeJSONString(
                                            this.state.monsterExample
                                        )}
                                    </code>
                                </pre>
                                <div>
                                    Note that in order to access the List
                                    values, you will need to deserialize them
                                    individual.
                                </div>
                                <div>Like this:</div>
                                <pre>
                                    <code>
                                        awakenings =
                                        json.loads(monster['awakenings'])
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
