import React, { Component } from "react";

export default class EvolutionTable extends Component {
    constructor(props) {
        super(props);
        this.getImageLink = this.getImageLink.bind(this);
    }

    getImageLink(result) {
        return (
            "https://api.pad-db.com/static/padimages/portrait/" +
            String(result) +
            ".png"
        );
    }

    render() {
        if (this.props.evolutions) {
            return (
                <div>
                    <table className="table is-fullwidth">
                        <tbody>
                            {this.props.evolutions.map(evolution => (
                                <tr key={evolution.card_id}>
                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(this.props.monster)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    this.props.monster
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <i className="fas fa-plus" />
                                    </td>

                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(evolution.evo_mat_1)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    evolution.evo_mat_1
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(evolution.evo_mat_2)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    evolution.evo_mat_2
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(evolution.evo_mat_3)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    evolution.evo_mat_3
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(evolution.evo_mat_4)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    evolution.evo_mat_4
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(evolution.evo_mat_5)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    evolution.evo_mat_5
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <i className="fas fa-equals" />
                                    </td>
                                    <td className="has-text-centered">
                                        <a
                                            href={
                                                "/monster/" +
                                                String(evolution.card_id)
                                            }
                                        >
                                            <img
                                                src={this.getImageLink(
                                                    evolution.card_id
                                                )}
                                                alt="pad_image"
                                            />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
        return <div>This monster does not evolve.</div>;
    }
}
