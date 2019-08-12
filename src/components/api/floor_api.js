import React, { Component } from "react";
import "./styles.css";
import Axios from "axios";

export default class FloorAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            floorExample: {},
            floorExample2: {}
        };

        this.floorExampleURL = "https://api.pad-db.com/rest/floors/11/";
        this.floorExampleURL2 = "https://api.pad-db.com/rest/floor/456/1";
    }

    componentDidMount() {
        Axios.get(this.floorExampleURL)
            .then(response => {
                this.setState({ floorExample: response.data });
            })
            .catch(err => {
                console.log("Error fetching example data: " + err);
            });

        Axios.get(this.floorExampleURL2)
            .then(response => {
                this.setState({ floorExample2: response.data });
            })
            .catch(err => {
                console.log("Error fetching example data: " + err);
            });
    }

    render() {
        return (
            <div id="floors">
                <div className="columns is-desktop is-centered">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Floors</h1>
                            <pre>
                                <code>/rest/floors/</code>
                            </pre>
                            <pre>
                                <code>/rest/floors/&lt;int:dungeon_id&gt;</code>
                            </pre>
                            <pre>
                                /rest/floor/&lt;int:dungeon_id&gt;/&lt;int:floor_number&gt;
                            </pre>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container is-fluid has-bottom-margin">
                            <div className="box">
                                <div>
                                    I have two public API endpoints available
                                    for floors.
                                </div>
                                <div>The first one,</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/floors/
                                    </code>
                                </pre>
                                <div>
                                    returns a list of every floor object with
                                    every column available in the PAD DB
                                    database.
                                </div>
                            </div>
                            <div className="box">
                                <div>The second one</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/floor/&lt;int:floor_id&gt;
                                    </code>
                                </pre>
                                <div>
                                    requires an additional value, the floors
                                    integer ID value, and returns all floors
                                    associated with a dungeon_id.
                                </div>
                                <pre>{this.floorExampleURL}</pre>
                                <div>Returns the following:</div>
                                <pre>
                                    <code>
                                        {this.props.makeJSONString(
                                            this.state.floorExample
                                        )}
                                    </code>
                                </pre>
                            </div>
                            <div className="box">
                                <div>The third one</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/floor/&lt;int:dungeon_id&gt;/&lt;int:floor_number&gt;
                                    </code>
                                </pre>
                                <div>
                                    requires both a dungeon_id and a
                                    floor_number and gets you the data for a
                                    specific floor (or wave) of a dungeon.
                                </div>
                                <pre>{this.floorExampleURL2}</pre>
                                <div>Returns the following:</div>
                                <pre>
                                    <code>
                                        {this.props.makeJSONString(
                                            this.state.floorExample2
                                        )}
                                    </code>
                                </pre>
                                <div>
                                    Note that you'll have to deserialize
                                    individual elements if you want to access
                                    list or dictionary items.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
