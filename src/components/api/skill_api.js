import React, { Component } from "react";
import "./styles.css";
import Axios from "axios";

export default class SkillAPI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skillExample: {}
        };

        this.skillExampleURL = "https://api.pad-db.com/rest/skill/4204/"
    }

    componentDidMount() {
        Axios.get(this.skillExampleURL)
            .then(response => {
                this.setState({ skillExample: response.data });
            })
            .catch(err => {
                console.log("Error fetching example data: " + err);
            });
    }

    render() {
        return (
            <div className="box" id="skills">
                <div className="main-title columns is-desktop is-centered">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Skills</h1>
                            <pre>
                                <code>
                                    https://api.pad-db.com/rest/skills/
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    https://api.pad-db.com/rest/skill/&lt;int:skill_id&gt;
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className="column">
                        <div className="container is-fluid has-bottom-margin">
                            <div className="box">
                                <div>
                                    I have two public API endpoints available
                                    for skills.
                                </div>
                                <div>The first one,</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/skills/
                                    </code>
                                </pre>
                                <div>
                                    returns a list of every skill object with
                                    every column available in the PAD DB
                                    database.
                                </div>
                            </div>
                            <div className="box">
                                <div>The second one</div>
                                <pre>
                                    <code>
                                        https://api.pad-db.com/rest/skill/&lt;int:skill_id&gt;
                                    </code>
                                </pre>
                                <div>
                                    requires an additional value, the skills
                                    integer ID value, and returns an single
                                    skill object
                                </div>
                                <pre>
                                    {this.skillExampleURL}
                                </pre>
                                <div>Returns the following:</div>
                                <pre>
                                    <code>
                                        {this.props.makeJSONString(
                                            this.state.skillExample
                                        )}
                                    </code>
                                </pre>
                                <div>
                                    Note that the multiplier calculations have been done ahead of time.
                                </div>
                                <div>The values</div>
                                <pre>
                                    *_full
                                </pre>
                                <div>indicate the values when paired with itself</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
