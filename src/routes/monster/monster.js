import React, { Component } from "react";
import Axios from "axios";
import NavBar from "../../components/nav/nav";
import NameSection from "../../components/monster/monster_header";
import MonsterOverview from "../../components/monster/monster_overview";
import Awakenings from "../../components/monster/awakenings";
import LeaderSkill from "../../components/monster/skills/leader_skill";
import ActiveSkill from "../../components/monster/skills/active_skill";
import Evolutions from "../../components/monster/evolutions/evolutions";
import Ancestor from "../../components/monster/evolutions/ancestor";

export default class Monster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: {},
            activeSkill: {},
            leaderSkill: {},
            ancestor: {}
        };
        this.data_url = "http://localhost:8000";
        this.getImageLink = this.getImageLink.bind(this);
    }

    getImageLink(result) {
        return (
            "https://api.pad-db.com/static/padimages/portrait/" +
            String(result) +
            ".png"
        );
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

                Axios.get(
                    this.data_url + "/monsters/" +
                        String(this.state.monster.ancestor_id)
                )
                    .then(response => {
                        if (response.data.length !== 0) {
                            console.log("Found ancestor: " + response.data);
                            this.setState({ ancestor: response.data });
                        } else {
                            console.log("No ancestor");
                        }
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
                <div id="awakenings">
                    <Awakenings monster={this.state.monster} />
                </div>
                <div id="evolutions">
                    <Evolutions monster={this.state.monster} />
                </div>
                <div id="ancestor">
                    <Ancestor monster={this.state.monster} ancestor={this.state.ancestor} getImageLink={this.getImageLink} />
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
