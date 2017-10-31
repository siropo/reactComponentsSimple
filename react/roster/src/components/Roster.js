import React, { Component } from 'react';
import Char from './Char';

class Roster extends Component {

    constructor() {
        super();

        this.state = {
            charArr: []
        }
    }

    componentDidMount() {
        (async () => {
            try {
                const jsonData = await fetch('http://localhost:9999/roster');
                const data = await jsonData.json();
                this.setState({ charArr: data })
            } catch (e) {
                console.log(e);
            }
        })();
    }

    render() {
        return (
            <div className="wrapper-chars">
                {this.state.charArr.map((value, index) => {
                    return <Char key={index} params={value} />
                })}
            </div>
        )
    }
}

export default Roster;