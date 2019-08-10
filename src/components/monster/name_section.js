import React, { Component } from "react";

export default class NameSection extends Component {
    constructor(props) {
        super(props);
        this.getPortraitImageLink = this.getPortraitImageLink.bind(this);
    }

    getPortraitImageLink() {
        return (
            "https://api.pad-db.com/static/padimages/portrait/" +
            String(this.props.monster.card_id) +
            ".png"
        );
    }


    render() {
        return (
            <div className="hero is-dark is-fullheight">
                <div className="hero-body">
                    <div className="container is-fluid">
                        <img
                            src={this.getPortraitImageLink()}
                            alt="img"
                            height="75"
                            width="75"
                        />
                        <div className="title">{this.props.monster.name}</div>
                    </div>
                </div>
            </div>
        );
    }
}
