import React, { Component } from "react";
import NavBar from "../../components/nav/nav";
import MonsterTile from "../../components/monster/monster_tile";

export default class Monster extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <MonsterTile />
            </div>
        );
    }
}
