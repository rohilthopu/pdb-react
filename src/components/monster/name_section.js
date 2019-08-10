import React, { Component } from "react";

export default class NameSection extends Component {
    constructor(props) {
        super(props);
        this.getPortraitImageLink = this.getPortraitImageLink.bind(this);
        this.get = this.get.bind(this);
    }

    getPortraitImageLink() {
        return (
            "https://api.pad-db.com/static/padimages/portrait/" +
            this.get("card_id") +
            ".png"
        );
    }

    get(property) {
        return this.props.monster[property];
    }

    render() {
        return (
            <div className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container is-fluid">
                        <img
                            src={this.getPortraitImageLink()}
                            alt="pad_image"
                            height="75"
                            width="75"
                        />
                        <div className="title">{this.get('name')}</div>
                    </div>
                </div>
            </div>
        );
    }
}
