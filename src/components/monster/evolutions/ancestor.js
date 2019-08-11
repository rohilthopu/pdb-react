import React, { Component } from "react";
import AncestorTable from "./ancestor_table";

export default class Ancestor extends Component {

    constructor(props) {
        super(props)
        this.getImageLink = this.props.getImageLink.bind(this)
    }

    render() {
        return (
            <div className="box">
                <div className="main-title">
                    <div className="columns is-centered main-title">
                        <div className="column is-half">
                            <div className="container is-fluid">
                                <h1 className="title">Ancestor</h1>
                            </div>
                        </div>
                        <div className="column is-bordered">
                            <div className="container is-fluid has-bottom-margin">
                                <AncestorTable monster={this.props.monster} ancestor={this.props.ancestor} getImageLink={this.getImageLink} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
