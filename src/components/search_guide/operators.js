import React from 'react';
import './overview.css';


class Operators extends React.Component {
    render() {
        return (
            <div className="box">
                <div className="columns is-desktop is-centered main-title">
                    <div className="column is-centered is-one-third">
                        <div className="container is-fluid">
                            <h1 className="title">Operators</h1>
                        </div>
                    </div>
                    <div className="column is-bordered">
                        <div className="container is-fluid has-bottom-margin is-ful">
                            <div>
                                The operators currently supported by the engine are listed in the table below.
                            </div>
                            <table className="table is-fullwidth">
                                <thead>
                                <tr>
                                    <th>Operator</th>
                                    <th>Function</th>
                                    <th>Example</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>  </td>
                                    <td>Default search by name (no operator)</td>
                                    <td>reincarnated anubis</td>
                                </tr>
                                <tr>
                                    <td> &gt; </td>
                                    <td>Greater Than</td>
                                    <td>max atk > 4000</td>
                                </tr>
                                <tr>
                                    <td> &lt; </td>
                                    <td>Less Than</td>
                                    <td> card id &lt; 100</td>
                                </tr>
                                <tr>
                                    <td> &gt;=</td>
                                    <td>Greater Than or Equal To</td>
                                    <td> rarity >= 4000</td>
                                </tr>
                                <tr>
                                    <td> &lt;=</td>
                                    <td>Less Than or Equal To</td>
                                    <td>min rcv &lt;= 0</td>
                                </tr>
                                <tr>
                                    <td> = </td>
                                    <td>Equals</td>
                                    <td>name = ney</td>
                                </tr>
                                <tr>
                                    <td> and </td>
                                    <td>Logical AND (between filters) </td>
                                    <td>attribute = water and sub attribute = light</td>
                                </tr>
                                <tr>
                                    <td> , </td>
                                    <td>Logical AND (local) *</td>
                                    <td>type = dragon, god</td>
                                </tr>
                                <tr>
                                    <td> x </td>
                                    <td> Amount **</td>
                                    <td>awakenings = 7c x4</td>
                                </tr>
                                <tr>
                                    <td> || </td>
                                    <td> Logical OR (combines two query sets together)</td>
                                    <td>valkyrie ciel || type = healer</td>
                                </tr>
                                </tbody>
                            </table>
                            <div>
                                * Applies to type, awakenings, and super awakenings
                            </div>
                            <div>
                                ** Applies to awakenings and super awakenings
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Operators;