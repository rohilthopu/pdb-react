import React from 'react';
class Guerrilla extends React.Component {

    render() {
        return (
            <table className="table is-fullwidth is-hoverable">
                <thead>
                <tr>
                    <th className="has-text-left">Dungeon</th>
                    <th className="has-text-centered">Group</th>
                    <th className="has-text-centered">Status</th>
                    {/*<th className="has-text-centered">Time Until</th>*/}
                    {/*<th className="has-text-centered">Time Left</th>*/}
                    {/*<th className="has-text-centered hide" id="nahead">Time</th>*/}
                </tr>
                </thead>
                <tbody>
                {this.props.activeDungeons.map(
                    (dungeon) => (
                        <tr key={dungeon.id}>
                            <td className="has-text-left">{dungeon.name}</td>
                            <td className="has-text-centered">{dungeon.group}</td>
                            <td className="has-text-centered" >{dungeon.status}</td>
                            {/*<td className="has-text-centered spaced" name="starttime" value="{{ dungeon.start_secs }}"></td>*/}
                            {/*<td className="has-text-centered spaced" name="endtime" value="{{ dungeon.end_secs }}"></td>*/}
                            {/*<td className="has-text-centered hide spaced" name="time-mobile" id="naval"></td>*/}
                        </tr>
                    )
                )}
                </tbody>
            </table>
        );
    }
}

export default Guerrilla;
