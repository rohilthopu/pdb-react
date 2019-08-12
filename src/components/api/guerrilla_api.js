import React, { Component } from "react";
import "./styles.css";
import Axios from "axios";

export default class GuerrillaAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guerrillaExample: {}
        };

        this.guerrillaExampleURL = "https://api.pad-db.com/rest/guerrilla/";
    }

    componentDidMount() {
        Axios.get(this.guerrillaExampleURL)
            .then(response => {
                this.setState({ guerrillaExample: response.data });
            })
            .catch(err => {
                console.log("Error fetching example data: " + err);
            });
    }

    render() {
        return (
            <div className="main-title" id="guerrillas">
                <div className="columns is-desktop is-centered">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Guerrillas</h1>
                            <pre>
                                <code>/rest/guerrilla/</code>
                            </pre>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container is-fluid has-bottom-margin">
                            <div className="box">
                                <div>
                                    I have one public API endpoint available for
                                    guerrillas.
                                </div>
                                <div>The first singular endpoint, </div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/guerrilla/
                                    </code>
                                </pre>
                                <div>
                                    returns a list of every guerrilla object
                                    with every column available in the PAD DB
                                    database.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
