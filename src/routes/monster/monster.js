import React, { Component } from "react";
import NavBar from "../../components/nav/nav";
import NameSection from "../../components/monster/monster_header";
import MonsterOverview from "../../components/monster/monster_overview";
import Awakenings from "../../components/monster/awakenings";
import LeaderSkill from "../../components/monster/leader_skill";
import ActiveSkill from "../../components/monster/active_skill";
import Evolutions from '../../components/monster/evolutions';

import Axios from "axios";

export default class Monster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: {},
            activeSkill: {},
            leaderSkill: {}
        };
        this.data_url = "http://localhost:8000";
    }

    componentDidMount() {
        // /monster/<some id value>
        let id_param = this.props.match.params.id;
        // get monster data from django api
        Axios.get(this.data_url + "/monsters/" + String(id_param))
            .then(response => {
                console.log(response.data);
                this.setState({ monster: response.data });
                Axios.get(
                    this.data_url +
                        "/skills/" +
                        String(this.state.monster.active_skill_id)
                )
                    .then(response => {
                        console.log(response.data);
                        this.setState({ activeSkill: response.data });
                    })
                    .catch(err => {
                        console.log(err);
                    });
                Axios.get(
                    this.data_url +
                        "/skills/" +
                        String(this.state.monster.leader_skill_id)
                )
                    .then(response => {
                        console.log(response.data);
                        this.setState({ leaderSkill: response.data });
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <NavBar />
                <NameSection monster={this.state.monster} />
                <div id="overview">
                    <MonsterOverview monster={this.state.monster} />
                </div>
                <div>
                    <Evolutions monster={this.state.monster}/>
                </div>
                <div id="awakenings">
                    <Awakenings monster={this.state.monster} />
                </div>
                <div id="activeskill">
                    <ActiveSkill skill={this.state.activeSkill} />
                </div>
                <div id="leaderskill">
                    <LeaderSkill leaderSkill={this.state.leaderSkill} />
                </div>
            </div>
        );
    }
}
