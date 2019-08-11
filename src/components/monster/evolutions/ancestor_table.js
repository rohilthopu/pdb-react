import React, { Component } from "react";

export default class AncestorTable extends Component {

    constructor(props) {
        super(props)
        this.getImageLink = this.props.getImageLink.bind(this)
    }

    render() {
        if (this.props.ancestor) {
            return (
                <div>
                    <table className="table is-fullwidth">
                        <tbody>
                            <tr>
                                <td className="has-text-centered">
                                    <a
                                        href={
                                            "/monster/" +
                                            String(this.props.monster.card_id)
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
        return <div>This monster has no ancestor.</div>;
    }
}
