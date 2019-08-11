import React, { Component } from "react";

export default class AncestorTable extends Component {
    constructor(props) {
        super(props);
        this.getImageLink = this.props.getImageLink.bind(this);
        this.makeMonsterImgLink = this.makeMonsterImgLink.bind(this);
    }

    makeMonsterImgLink(card_id) {
        return (
            <a href={"/monster/" + String(card_id)}>
                <img src={this.getImageLink(card_id)} alt="pad_image" />
            </a>
        );
    }

    render() {
        if (this.props.ancestor) {
            return (
                <div>
                    <table className="table is-fullwidth">
                        <tbody>
                            <tr>
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
                                        this.props.ancestor.un_evo_mat_1
                                    )}
                                </td>
                                <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        this.props.ancestor.un_evo_mat_2
                                    )}
                                </td>
                                <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        this.props.ancestor.un_evo_mat_3
                                    )}
                                </td>
                                <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        this.props.ancestor.un_evo_mat_4
                                    )}
                                </td>
                                <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        this.props.ancestor.un_evo_mat_5
                                    )}
                                </td>
                                <td style={{ verticalAlign: "middle" }}>
                                    <i className="fas fa-equals" />
                                </td>
                                <td className="has-text-centered">
                                    {this.makeMonsterImgLink(
                                        this.props.ancestor.card_id
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        return <div>This monster has no ancestor.</div>;
    }
}
