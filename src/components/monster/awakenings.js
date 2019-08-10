import React, { Component } from "react";
import "./styles.css";

export default class Awakenings extends Component {
    constructor(props) {
        super(props);
        this.getAwokenImageLink = this.getAwokenImageLink.bind(this);
        this.makeAwokenSkills = this.makeAwokenSkills.bind(this);
    }

    getAwokenImageLink(skill) {
        return (
            "http://www.puzzledragonx.com/en/img/awokens/" +
            String(skill) +
            ".png"
        );
    }

    makeAwokenSkills(awokenSkills) {
        console.log(awokenSkills);
        if (awokenSkills != null) {
            return (
                <div>
                    {awokenSkills.map((skill, index) => (
                        <img
                            key={index}
                            src={this.getAwokenImageLink(skill)}
                            alt=""
                            className="a-little-space"
                            // height="22"
                            // width="22"
                        />
                    ))}
                </div>
            );
        }
        return <div>None</div>;
    }

    render() {
        return (
            <div className="box">
                <div className="main-title">
                    <div className="columns is-centered main-title">
                        <div className="column is-half">
                            <div className="container is-fluid">
                                <h1 className="title">Awoken Skills</h1>
                            </div>
                        </div>
                        <div className="column is-bordered">
                            <div className="container is-fluid has-bottom-margin">
                                <div className="subtitle">Awoken Skills</div>

                                {this.makeAwokenSkills(
                                    this.props.monster.awakenings_raw
                                )}

                                <div className="subtitle">
                                    Super Awoken Skills
                                </div>

                                {this.makeAwokenSkills(
                                    this.props.monster.super_awakenings_raw
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
