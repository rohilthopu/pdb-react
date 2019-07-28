import React from 'react';

class ActiveGuerrilla extends React.Component {
    render() {

        function getTimeUntil(dungeon) {
            let time = new Date().getTime() / 1000;
            let timeDiff = (dungeon.end_secs - time) / 3600;
            return secondsToHms(timeDiff * 3600);
        }

        function secondsToHms(d) {
            d = Number(d);
            let h = Math.floor(d / 3600);
            let m = Math.floor(d % 3600 / 60);
            return ('0' + h).slice(-2) + " hr : " + ('0' + m).slice(-2) + ' min'
        }

        return (
            <table className="table is-fullwidth is-hoverable">
                <thead>
                <tr>
                    <th className="has-text-left">Dungeon</th>
                    <th className="has-text-centered">Group</th>
                    <th className="has-text-centered">Status</th>
                    <th className="has-text-centered">Time Left</th>
                </tr>
                </thead>
                <tbody>
                {this.props.dungeons.map(
                    (dungeon) => (
                        <tr key={dungeon.id}>
                            <td className="has-text-left">{dungeon.name}</td>
                            <td className="has-text-centered">{dungeon.group}</td>
                            <td className="has-text-centered">{dungeon.status}</td>
                            <td className="has-text-centered spaced" name="endtime">{getTimeUntil(dungeon)}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        );
    }
}

export default ActiveGuerrilla;
