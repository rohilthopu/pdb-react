import React from 'react';
import axios from 'axios';
import NavBar from '../../components/nav/nav'
import ActiveGuerrilla from '../../components/guerrilla/active_guerrilla.js'
import UpcomingGuerrilla from '../../components/guerrilla/upcoming_guerrilla.js'
import './home.css';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'guerrillaDungeons': []};
        this.getGuerrillaDungeons = this.getGuerrillaDungeons.bind(this);
        this.getActiveDungeons = this.getActiveDungeons.bind(this);
        this.getUpcomingDungeons = this.getUpcomingDungeons.bind(this);
    }

    componentDidMount() {
        // console.log('Downloading UpcomingGuerrilla Data....');
        this.getGuerrillaDungeons();
    }

    getGuerrillaDungeons() {
        axios.get('https://www.pad-db.com/api/guerrilla')
            .then((response) => {
                // console.log('Receving guerrilla dungeon data:');
                // response.data.map((dungeon) => console.log(dungeon));
                this.setState({'guerrillaDungeons': response.data});
            }).catch((error) => {
                console.log(error)
            }
        );
    }

    getActiveDungeons() {
        return this.state.guerrillaDungeons.filter(
            (dungeon) => dungeon.status === "Active"
        );
    }

    getUpcomingDungeons() {
        return this.state.guerrillaDungeons.filter(
            (dungeon) => dungeon.status === "Upcoming"
        );
    }

    render() {

        function getCurrentDate() {
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();
            return mm + '/' + dd + '/' + yyyy;
        }

        return (
            <div>
                <NavBar/>
                <section className="hero is-dark hero-margin">
                    <div className="hero-body has-text-centered">
                        <div className="container is-fluid">
                            <h1 className="title"> Schedule </h1>
                            <h2 className="subtitle"> Guerrilla Dungeons for {getCurrentDate()} </h2>
                        </div>
                    </div>
                </section>
                <div className='columns is-centered'>
                    <div className='column is-half'>
                        <div className='has-text-centered'>
                            <h1>Active Dungeons</h1>
                        </div>
                        <ActiveGuerrilla dungeons={this.getActiveDungeons()}/>
                        <div className='has-text-centered'>
                            <h1>Upcoming Dungeons</h1>
                        </div>
                        <UpcomingGuerrilla dungeons={this.getUpcomingDungeons()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
