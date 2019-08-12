import React, { Component } from "react";
import NavBar from "../../components/nav/nav";
import APIHeader from "../../components/api/api_header";
import MonsterAPI from "../../components/api/monster_api";

export default class API extends Component {
    constructor(props) {
        super(props);
        this.makeJSONString = this.makeJSONString.bind(this);
    }

    makeJSONString(data) {
        return JSON.stringify(data, undefined, 4);
    }

    render() {
        return (
            <div>
                <NavBar />
                <APIHeader />
                <MonsterAPI makeJSONString={this.makeJSONString} />
            </div>
        );
    }
}
