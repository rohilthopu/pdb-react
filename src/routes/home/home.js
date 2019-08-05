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
        setInterval(this.getGuerrillaDungeons, 60000)
    }

    getGuerrillaDungeons() {
        axios.get('https://api.pad-db.com/api/guerrilla')
            .then((response) => {
                this.setState({'guerrillaDungeons': response.data});
            }).catch((error) => {
                console.log(error)
            }
        );
    }

    getActiveDungeons() {
        return this.state.guerrillaDungeons.filter(
            (dungeon) => {
                let time = new Date().getTime() / 1000;
                return dungeon.status === "Active" && dungeon.start_secs <= time && dungeon.end_secs > time
            }
        );
    }

    getUpcomingDungeons() {
        return this.state.guerrillaDungeons.filter(
            (dungeon) => {
                let time = new Date().getTime() / 1000;
                return dungeon.status === "Upcoming" && dungeon.start_secs > time
            }
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
                <div className='columns is-centered column_margin'>
                    <div className='column is-three-quarters'>
                        <div className='subtitle has-text-centered'>
                            <h1>Active Dungeons</h1>
                        </div>
                        <ActiveGuerrilla dungeons={this.getActiveDungeons()}/>
                        <div className='subtitle has-text-centered'>
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
