import React, { Component } from "react";
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
                    <div className="container is-fluid is-centered">
                        <div className="is-desktop">
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
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li>
                                    <a>Overview</a>
                                </li>
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <li>
                                    <a>Operators</a>
                                </li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
