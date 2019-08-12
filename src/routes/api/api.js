import React, { Component } from 'react';
import NavBar from '../../components/nav/nav';
import APIHeader from '../../components/api/api_header';
import MonsterAPI from '../../components/api/monster_api';

export default class API extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <APIHeader />
                <MonsterAPI />
            </div>
        )
    }

}