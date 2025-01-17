import React from 'react';

class UpcomingGuerrilla extends React.Component {
    render() {

        function getTimeUntil(dungeon) {
            let time = new Date().getTime() / 1000;
            let timeDiff = (dungeon.start_secs - time) / 3600;
            return secondsToHms(timeDiff * 3600);
        }

        function secondsToHms(d) {
            d = Number(d);
            let h = Math.floor(d / 3600);
            let m = Math.floor(d % 3600 / 60);
            return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2)
        }

        return (
            <table className="table is-fullwidth is-hoverable">
                <thead>
                <tr>
                    <th className="has-text-left">Dungeon</th>
                    <th className="has-text-centered">Group</th>
                    <th className="has-text-centered">Time Left (hr:min)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.dungeons.map(
                    (dungeon) => (
                        <tr key={dungeon.id}>
                            <td className="has-text-left">{dungeon.name}</td>
                            <td className="has-text-centered">{dungeon.group}</td>
                            <td className="has-text-centered spaced">{getTimeUntil(dungeon)}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        );
    }
}

export default UpcomingGuerrilla;
