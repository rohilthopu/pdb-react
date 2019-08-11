import React, { Component } from "react";

export default class ActiveSkill extends Component {
    render() {
        return (
            <div className="box">
                <div className="main-title">
                    <div className="columns is-centered main-title">
                        <div className="column is-half">
                            <div className="container is-fluid">
                                <h1 className="title">Active Skill</h1>
                            </div>
                        </div>
                        <div className="column is-bordered">
                            <div className="container is-fluid has-bottom-margin">
                                <div className="title">
                                    {this.props.skill.name}
                                </div>
                                <div className="subtitle">
                                    {this.props.skill.description}
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
                                            <td>SOLO</td>
                                            <td>
                                                {this.props.skill.hp_mult}
                                            </td>
                                            <td>
                                                {
                                                    this.props.skill
                                                        .atk_mult
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.skill
                                                        .rcv_mult
                                                }
                                            </td>
                                            <td>
                                                {
                                                    this.props.skill
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
