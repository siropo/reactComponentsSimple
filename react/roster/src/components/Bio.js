import React, { Component } from 'react';
import Char from './Char';

class Bio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            curChar: {
                url: ''
            }
        }
    }

    componentDidMount() {
        (async () => {
            try {
                const jsonData = await fetch('http://localhost:9999/character/' + this.state.id);
                const data = await jsonData.json();
                this.setState({ curChar: data })
            } catch (e) {
                console.log(e);
            }
        })();
    }

    componentWillReceiveProps() {
        (async () => {
            try {
                const jsonData = await fetch('http://localhost:9999/character/' + this.props.id);
                const data = await jsonData.json();
                this.setState({ curChar: data })
            } catch (e) {
                console.log(e);
            }
        })();
    }

    render() {
        return (
            <fieldset>

                <Char key={0} params={{ url: this.state.curChar.url }} />
                <p>
                    {this.state.curChar.bio}
                </p>
            </fieldset>
        )
    }

}

export default Bio;

