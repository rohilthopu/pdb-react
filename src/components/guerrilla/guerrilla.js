import React from 'react';
import NavBar from '../nav/nav.js'

const heroMargin = {
    marginBottom: '2%'
};

class Guerrilla extends React.Component {
    render() {

        function getCurrentDate(){
            let today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            const yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;
            return today;
        }

        function HomeBanner() {
            return (
                <section className="hero is-dark" style={heroMargin}>
                    <div className="hero-body has-text-centered">
                        <div className="container is-fluid">
                            <h1 className="title"> Schedule </h1>
                            <h2 className="subtitle"> Guerrilla Dungeons for {getCurrentDate()} </h2>
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <div>
                <NavBar/>
                <HomeBanner/>
            </div>
        );
    }
}

export default Guerrilla;
