import React from 'react';
import './overview.css';


class Aliases extends React.Component {

    constructor(props) {
        super(props);
        this.stringifyAwakenings = this.stringifyAwakenings.bind(this);
        this.stringifyAttributes = this.stringifyAttributes.bind(this);
    }

    stringifyAwakenings() {
        return JSON.stringify(
            {
                'AWAKENING_ALIASES': {
                    '7c': 43,
                    '10c': 61,
                    'unbindable': 10,
                    'unbindable+': 52,
                    'autoheal': 9,
                    'blind resist': 10,
                    'jammer resist': 12,
                    'poison resist': 13,
                    'time extend': 19,
                    'te': 19,
                    'bind clear': 20,
                    'sb': 21,
                    'tpa': 27,
                    'prong': 27,
                    'skill bind resist': 28,
                    'sbr': 28,
                    'heal prong': 29,
                    'fua': 45,
                    'follow up attack': 45,
                    'followup attack': 45,
                    'team hp+': 46,
                    'team rcv+': 46,
                    'super fua': 50,
                    'fua2': 50,
                    'fua 2': 50,
                    'vdp': 48,
                    'dvp': 48,
                    'void damage piercer': 48,
                    'equip': 49,
                    'time extend+': 53,
                    'te+': 53,
                    'tape resist': 55,
                    'sb+': 56,
                    'gt 80%': 57,
                    'lt 50%': 58,
                    'l unlock': 59,
                    'l-unlock': 59,
                    'l attack': 60,
                    'l-attack': 60,
                    'hp down': 65,
                    'atk down': 66,
                    'rcv down': 67,
                    'poison resist+': 70,
                    'jammer resist+': 71,
                    'blind resist+': 72,
                }
            },
            undefined,
            4
        )
    }

    stringifyAttributes() {
        return JSON.stringify(
            {
                'ATTRIBUTE_ALIASES': {
                    'hpmf': 'leader_skill.hp_mult_full',
                    'atkmf': 'leader_skill.atk_mult_full',
                    'rcvmf': 'leader_skill.rcv_mult_full',
                    'hpm': 'leader_skill.hp_mult',
                    'atkm': 'leader_skill.atk_mult',
                    'rcvm': 'leader_skill.rcv_mult',
                    'leader shield': 'leader_skill.shield',
                    'pair shield': 'leader_skill.shield_full',
                    'active_hpm': 'active_skill.hp_mult',
                    'active_atkm': 'active_skill.atk_mult',
                    'active_rcvm': 'active_skill.rcv_mult',
                    'active_shield': 'active_skill.shield',
                    'has_evomat': 'evolution_materials',
                    'has_devomat': 'un_evolution_materials',
                    'has_evomat_raw': 'evolution_materials_raw',
                    'has_devomat_raw': 'un_evolution_materials_raw',
                }
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
                            <h1 className="title">Aliases</h1>
                        </div>
                    </div>
                    <div className="column is-bordered has-bottom-margin">
                        <div className="container is-fluid">
                            The following are some aliases that I use to simplify queries against categories.
                        </div>
                        <div className="container is-fluid">
                            Feel free to send me some suggestions for considerations.
                        </div>
                        <div className="columns is-centered">
                            <div className="column">
                                <div className="container is-fluid">
                                    Attribute Aliases
                                </div>
                                <div className="container is-fluid">
                                    <pre>
                                        <code>
                                            {this.stringifyAttributes()}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                            <div className="column">
                                <div className="container is-fluid">
                                    Awoken Skill Aliases
                                </div>
                                <div className="container is-fluid">
                                    <pre>
                                        <code>
                                            {this.stringifyAwakenings()}
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                        <div className="container is-fluid">
                            For example, you might do a query such as
                        </div>
                        <div className="container is-fluid">
                            <pre>
                                <code>
                                    has evomat = machine athena gem and atkmf > 100 and awakenings = te, god killer
                                </code>
                            </pre>
                        </div>
                        <div className="container is-fluid">
                            Which would yield
                        </div>
                        <div className="container is-fluid">
                           <pre>
                               <code>
                                    Destructive Machine God, Ragnarok Dragon
                                </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Aliases;