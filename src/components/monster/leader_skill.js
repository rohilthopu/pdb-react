import React, { Component } from "react";

export default class LeaderSkill extends Component {
    render() {
        return (
            <div className="box">
                <div className="main-title">
                    <div className="columns is-centered main-title">
                        <div className="column is-half">
                            <div className="container is-fluid">
                                <h1 className="title">Leader Skill</h1>
                            </div>
                        </div>
                        <div className="column is-bordered">
                            <div className="container is-fluid has-bottom-margin">
                                <div className="title">
                                    {this.props.leaderSkill.name}
                                </div>
                                <div className="subtitle">
                                    {this.props.leaderSkill.description}
                                </div>

                                <table className="table is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>HP</th>
                                            <th>ATK</th>
                                            <th>RCV</th>
                                            <th>SHIELD</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>PAIR</td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .hp_mult_full
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .atk_mult_full
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .rcv_mult_full
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .shield_full
                                                }%
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>SOLO</td>
                                            <td>
                                                {this.props.leaderSkill.hp_mult}
                                            </td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .atk_mult
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .rcv_mult
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.leaderSkill
                                                        .shield
                                                }%
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
