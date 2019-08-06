import React from 'react';
import './overview.css';


class Categories extends React.Component {

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
                "type_1_id": 7,
                "type_2_id": 5,
                "rarity": 8,
                "cost": 45,
                "max_level": 99,
                "min_hp": 1674,
                "max_hp": 5048,
                "hp_scale": 1.0,
                "min_atk": 675,
                "max_atk": 1450,
                "atk_scale": 1.0,
                "min_rcv": 309,
                "max_rcv": 618,
                "rcv_scale": 1.0,
                "xp_max": 16000000,
                "xp_scale": 2.5,
                "active_skill_id": 1872,
                "leader_skill_id": 6486,
                "ancestor_id": 2013,
                "evo_mat_1": 165,
                "evo_mat_2": 165,
                "evo_mat_3": 165,
                "evo_mat_4": 165,
                "evo_mat_5": 165,
                "un_evo_mat_1": 155,
                "un_evo_mat_2": 156,
                "un_evo_mat_3": 157,
                "un_evo_mat_4": 158,
                "un_evo_mat_5": 159,
                "awakenings_raw": [
                    10,
                    10,
                    19,
                    9,
                    19,
                    28,
                    21,
                    9,
                    20
                ],
                "super_awakenings_raw": [
                    58,
                    54,
                    55
                ],
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
                "type_3_id": 1,
                "sell_mp": 5000,
                "collab_id": 0,
                "is_inheritable": true,
                "is_collab": false,
                "server": "NA",
                "evolution_materials": [
                    165,
                    165,
                    165,
                    165,
                    165
                ],
                "un_evolution_materials": [
                    155,
                    156,
                    157,
                    158,
                    159
                ],
                "types": [
                    "Devil",
                    "God",
                    "Balanced"
                ],
                "attribute": "Dark",
                "sub_attribute": "Dark",
                "collab": ""
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
                            <h1 className="title">Categories</h1>
                        </div>
                    </div>
                    <div className="column is-bordered">
                        <div className="container is-fluid has-bottom-margin is-ful">
                            <div>
                                The following is an example of monster objects categories that can be queried against.
                            </div>

                            <div>
                                All categories can be queried without underscores, but need to be in the correct order. For example,
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

export default Categories;