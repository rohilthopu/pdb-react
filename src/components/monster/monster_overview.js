import React, { Component } from "react";
import "./styles.css";

export default class MonsterOverview extends Component {
    render() {
        return (
            <div className="box">
                <div className="main-title">
                    <div className="columns is-centered main-title">
                        <div className="column is-half">
                            <div className="container is-fluid">
                                <h1 className="title">Monster Overview</h1>
                            </div>
                        </div>
                        <div className="column is-bordered">
                            <div className="container is-fluid has-bottom-margin">
                                <div>
                                    {this.props.monster.name} has the following
                                    stats:
                                </div>
                                <table className="table is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>MIN</th>
                                            <th>MAX</th>
                                            <th>+99</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>HP</td>
                                            <td>{this.props.monster.min_hp}</td>
                                            <td>{this.props.monster.max_hp}</td>
                                            <td>
                                                {this.props.monster.max_hp +
                                                    495}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>ATK</td>
                                            <td>
                                                {this.props.monster.min_atk}
                                            </td>
                                            <td>
                                                {this.props.monster.max_atk}
                                            </td>
                                            <td>
                                                {this.props.monster.max_atk +
                                                    990}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>RCV</td>
                                            <td>
                                                {this.props.monster.min_rcv}
                                            </td>
                                            <td>
                                                {this.props.monster.max_rcv}
                                            </td>
                                            <td>
                                                {this.props.monster.max_rcv +
                                                    495}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
