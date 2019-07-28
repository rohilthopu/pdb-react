import React from 'react';

class Guerrilla extends React.Component {

    constructor(props) {
        super(props);
        this.state = {'activeDungeons': this.props.activeDungeons};
    }

    componentDidMount() {
        this.setState({'activeDungeons': this.props.activeDungeons})
    }

    render() {
        return (
            <div> Hello </div>
        );
    }
}

export default Guerrilla;
