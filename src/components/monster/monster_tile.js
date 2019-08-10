import React, { Component } from "react";
import NameTile from "./name_tile";

export default class MonsterTile extends Component {
    render() {
        return (
            <div class="tile is-ancestor">
                <div class="tile is-vertical is-8">
                    <div class="tile">
                        <NameTile />
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-info">
                                <p class="title">Middle tile</p>
                                <p class="subtitle">With an image</p>
                                <figure class="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-danger">
                            <p class="title">Wide tile</p>
                            <p class="subtitle">Aligned with the right tile</p>
                            <div class="content" />
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                        <div class="content">
                            <p class="title">Tall tile</p>
                            <p class="subtitle">With even more content</p>
                            <div class="content" />
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}
