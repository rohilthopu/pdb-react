import React, { Component } from "react";

export default class EvolutionTable extends Component {
    constructor(props) {
        super(props);
        this.getImageLink = this.getImageLink.bind(this);
        this.makeMonsterImgLink = this.makeMonsterImgLink.bind(this);
    }

    makeMonsterImgLink(card_id) {
        return (
            <a href={"/monster/" + String(card_id)}>
                <img src={this.getImageLink(card_id)} alt="pad_image" />
            </a>
        );
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
                                    {this.makeMonsterImgLink(
                                        this.props.monster.card_id
                                    )}
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <i className="fas fa-plus" />
                                    </td>

                                    <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        evolution.evo_mat_1
                                    )}
                                    </td>
                                    <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        evolution.evo_mat_2
                                    )}
                                    </td>
                                    <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        evolution.evo_mat_3
                                    )}
                                    </td>
                                    <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        evolution.evo_mat_4
                                    )}
                                    </td>
                                    <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        evolution.evo_mat_5
                                    )}
                                    </td>
                                    <td style={{ verticalAlign: "middle" }}>
                                        <i className="fas fa-equals" />
                                    </td>
                                    <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        evolution.card_id
                                    )}
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
