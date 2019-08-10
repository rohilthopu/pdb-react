import React from 'react';
import './overview.css';


class Attributes extends React.Component {

    constructor(props) {
        super(props);
        this.stringifyJSON = this.stringifyJSON.bind(this);
    }

    stringifyJSON() {
        return JSON.stringify(
            {
                "card_id": 3385,
                "name": "Reincarnated Anubis",
                "attribute_id": 4,
                "sub_attribute_id": 4,
                "is_ult": false,
                "rarity": 8,
                "cost": 45,
                "max_level": 99,
                "min_hp": 1674,
                "max_hp": 5048,
                "min_atk": 675,
                "max_atk": 1450,
                "min_rcv": 309,
                "max_rcv": 618,
                "xp_max": 16000000,
                "active_skill_id": 1872,
                "leader_skill_id": 6486,
                "ancestor_id": 2013,
                "awakenings": [
                    "Resistance-Bind",
                    "Resistance-Bind",
                    "Extend Time",
                    "Auto-Recover",
                    "Extend Time",
                    "Resistance-Skill Bind",
                    "Skill Boost",
                    "Auto-Recover",
                    "Recover Bind"
                ],
                "super_awakenings": [
                    "Enhance when HP is below 50%",
                    "Resistance-Cloud",
                    "Resistance-Board Restrict"
                ],
                "sell_mp": 5000,
                "is_inheritable": true,
                "is_collab": false,
                "server": "NA",
                "evolution_materials": [
                    "Purple Evolution Mask",
                    "Purple Evolution Mask",
                    "Purple Evolution Mask",
                    "Purple Evolution Mask",
                    "Purple Evolution Mask"
                ],
                "un_evolution_materials": [
                    "Rubylit",
                    "Sapphilit",
                    "Emelit",
                    "Topalit",
                    "Amelit"
                ],
                "type": [
                    "Devil",
                    "God",
                    "Balanced"
                ],
                "attribute": "Dark",
                "sub_attribute": "Dark",
                "collab": "",
            },
            undefined,
            4
        )

    }


    render() {
        return (
            <div className="box">
                <div className="columns is-desktop is-centered main-title">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Query Attributes</h1>
                        </div>
                    </div>
                    <div className="column is-bordered">
                        <div className="container is-fluid has-bottom-margin">
                            <div>
                                The following is an example of monster JSON object retrieved from ElasticSearch.
                            </div>

                            <div>
                                All query attributes can be queried with or without underscores, but need to be in the correct order. For example,
                            </div>
                            <pre>
                                <code>
                                    sub attribute id = 4 or sub_attribute_id = 4
                                </code>
                            </pre>
                            <div>
                                But not
                            </div>
                            <pre>
                                <code>
                                    attribute_sub_id = 4 or id attribute sub = 4
                                </code>
                            </pre>
                            <div>
                                Attributes that have a list of values (type, awoken skills, evo mats) should be queried by their
                                english value rather than their raw value. For example,
                            </div>
                            <pre>
                                <code>
                                    super awakenings = 10c
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    awakenings = 7c x4
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    evolution materials = keeper of gold
                                </code>
                            </pre>
                            <pre>
                                <code>
                                    type = dragon, god
                                </code>
                            </pre>
                            <div>
                                Example available variables for Reincarnated Anubis:
                            </div>
                            <pre>
                                <code>
                                    {this.stringifyJSON()}
                                </code>
                            </pre>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attributes;