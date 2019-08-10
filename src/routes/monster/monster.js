import React, { Component } from "react";
import NavBar from "../../components/nav/nav";
import NameSection from "../../components/monster/name_section";

export default class Monster extends Component {
    
    render() {
        return (
            <div>
                <NavBar />
                <NameSection />
            </div>
        );
    }
}
