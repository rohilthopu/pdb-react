import React, { Component } from "react";

export default class NameTile extends Component {
    render() {
        return (
            <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                    <p class="title">Vertical...</p>
                    <p class="subtitle">Top tile</p>
                </article>
                <article class="tile is-child notification is-warning">
                    <p class="title">...tiles</p>
                    <p class="subtitle">Bottom tile</p>
                </article>
            </div>
        );
    }
}
