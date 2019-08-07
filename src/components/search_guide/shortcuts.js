import React from 'react';
import './overview.css';


class Shortcuts extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="columns is-desktop is-centered main-title">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Shortcuts</h1>
                        </div>
                    </div>
                    <div className="column is-bordered">
                        <div className="container is-fluid has-bottom-margin is-ful">
                            <div>
                                A growing list of shortcut queries is available below.
                            </div>
                            <div>
                                These can also be chained with operators above.
                            </div>
                            <table className="table is-fullwidth">
                                <thead>
                                <tr>
                                    <th>Keyword</th>
                                    <th>Function</th>
                                    <th>Example</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td> evolves into</td>
                                    <td>Finds all monsters that evolve into something called x</td>
                                    <td>evolves into = durga</td>
                                </tr>
                                <tr>
                                    <td> (hp/atk/rcv)m</td>
                                    <td>Monsters individual multiplier for (hp/atk/rcv)_mult</td>
                                    <td>rcvm > 2</td>
                                </tr>
                                <tr>
                                    <td> (hp/atk/rcv)mf</td>
                                    <td>Monsters pair multiplier for (hp/atk/rcv)_mult_full</td>
                                    <td>atkmf = 900</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shortcuts;