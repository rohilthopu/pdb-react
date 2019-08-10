import React, { Component } from "react";
import NavBar from "../../components/nav/nav";
import NameSection from "../../components/monster/name_section";
import Axios from "axios";

export default class Monster extends Component {
    constructor(props) {
        super(props);
        this.state = {
            monster: {},
            activeSkill: {},
            leaderSkill: {}
        };
    }

    componentDidMount() {
        // /monster/<some id value>
        let id_param = this.props.match.params.id;
        // get monster data from django api
        Axios.get("https://api.pad-db.com/api/monster/" + String(id_param))
            .then(response => {
                console.log(response.data);
                this.setState({ monster: response.data });

                Axios.get(
                    "https://api.pad-db.com/api/skill/" +
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
                    "https://api.pad-db.com/api/skill/" +
                        String(this.state.monster.leader_skill_id)
                )
                    .then(response => {
                        console.log(response.data);
                        this.setState({ activeSkill: response.data });
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
            </div>
        );
    }
}
