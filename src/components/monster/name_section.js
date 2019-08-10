import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./styles.css";

export default class NameSection extends Component {
    constructor(props) {
        super(props);
        this.getPortraitImageLink = this.getPortraitImageLink.bind(this);
        this.getFullImageLink = this.getFullImageLink.bind(this);
        this.getAltPortraitImageLink = this.getAltPortraitImageLink.bind(this);
        this.getAltFullImageLink = this.getAltFullImageLink.bind(this);
    }

    getPortraitImageLink() {
        return (
            "https://api.pad-db.com/static/padimages/portrait/" +
            String(this.props.monster.card_id) +
            ".png"
        );
    }

    getFullImageLink() {
        return (
            "https://api.pad-db.com/static/padimages/full/" +
            String(this.props.monster.card_id) +
            ".png"
        );
    }

    getAltPortraitImageLink() {
        return (
            "https://f002.backblazeb2.com/file/miru-data/padimages/jp/portrait/" +
            String(this.props.monster.card_id) +
            ".png"
        );
    }

    getAltFullImageLink() {
        return (
            "https://f002.backblazeb2.com/file/miru-data/padimages/jp/full/" +
            String(this.props.monster.card_id) +
            ".png"
        );
    }

    render() {
        return (
            <div className="hero is-dark is-fullheight">
                <div className="hero-head margin-top">
                    <div className="container is-fluid">
                        <div>
                            <img
                                src={this.getPortraitImageLink()}
                                alt={this.getAltPortraitImageLink()}
                            />
                            <div className="title">
                                {this.props.monster.name}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container is-fluid">
                        <img
                            src={this.getFullImageLink()}
                            alt={this.getAltFullImageLink()}
                        />
                    </div>
                    <div className="container is-fluid">
                        <aside className="menu is-large">
                            <p className="menu-label">SECTIONS</p>
                            <ul className="menu-list">
                                <li>
                                    <Link smooth to="#overview">
                                        Overview
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="#awakenings">
                                        Awoken Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="#activeskill">
                                        Active Skill
                                    </Link>
                                </li>
                                <li>
                                    <Link smooth to="#leaderskill">
                                        Leader Skill
                                    </Link>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
