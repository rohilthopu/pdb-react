import React, { Component } from "react";
import "./styles.css";
import Axios from "axios";

export default class DungeonAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dungeonExample: {}
        };

        this.dungeonExampleURL = "https://api.pad-db.com/rest/dungeon/11/";
    }

    componentDidMount() {
        Axios.get(this.dungeonExampleURL)
            .then(response => {
                this.setState({ dungeonExample: response.data });
            })
            .catch(err => {
                console.log("Error fetching example data: " + err);
            });
    }

    render() {
        return (
            <div id="dungeons">
                <div className="columns is-desktop is-centered">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Dungeons</h1>
                            <pre>
                                <code>/rest/dungeons/</code>
                            </pre>
                            <pre>
                                <code>
                                    /rest/dungeon/&lt;int:dungeon_id&gt;
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container is-fluid has-bottom-margin">
                            <div className="box">
                                <div>
                                    There are two public API endpoints available
                                    for dungeons.
                                </div>
                                <div>The first one,</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/dungeons/
                                    </code>
                                </pre>
                                <div>
                                    returns a list of every dungeon object with
                                    every column available in the PAD DB
                                    database.
                                </div>
                            </div>
                            <div className="box">
                                <div>The second one</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/dungeon/&lt;int:dungeon_id&gt;
                                    </code>
                                </pre>
                                <div>
                                    requires an additional value, the dungeons
                                    integer ID value, and returns an single
                                    dungeon object
                                </div>
                                <pre>{this.dungeonExampleURL}</pre>
                                <div>Returns the following:</div>
                                <pre>
                                    <code>
                                        {this.props.makeJSONString(
                                            this.state.dungeonExample
                                        )}
                                    </code>
                                </pre>
                                <div>
                                    Dungeon objects are connected to floor
                                    objects by their dungeon_id value
                                    (essentially the dungeon_id is the pk)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
