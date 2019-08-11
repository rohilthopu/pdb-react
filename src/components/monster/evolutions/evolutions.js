import React, { Component } from "react";

import "../styles.css";
import EvolutionTable from "./evolution_table";

export default class Evolutions extends Component {

    componentDidUpdate() {
        console.log("Evolution list: " + this.props.monster.evolution_list)

    }

    render() {
        return (
            <div className="box">
                <div className="main-title">
                    <div className="columns is-centered main-title">
                        <div className="column is-half">
                            <div className="container is-fluid">
                                <h1 className="title">Evolutions</h1>
                            </div>
                        </div>
                        <div className="column is-bordered">
                            <div className="container is-fluid has-bottom-margin">
                                <EvolutionTable monster={this.props.monster} evolutions={this.props.monster.evolution_list} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
