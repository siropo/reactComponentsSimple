import React, {Component} from 'react';
import leftArrowImg from './../resources/left.png';
import rightArrowImg from './../resources/right.png';

class Slider extends Component {

    constructor() {
        super();
        this.state = {
            focusedEpId: 0,
            imgUrl: ''
        }

        this.getNewEp = this
            .getNewEp
            .bind(this);
    }

    componentDidMount() {
        (async() => {
            try {
                const jsonData = await fetch('http://localhost:9999/episodePreview/' + this.state.focusedEpId);
                const data = await jsonData.json();
                this.setState({imgUrl: data.url})
            } catch (e) {}
        })();
    }

    getNewEp(id) {
        (async() => {
            try {
                const jsonData = await fetch('http://localhost:9999/episodePreview/' + id);
                const data = await jsonData.json();
                this.setState({imgUrl: data.url, focusedEpId: id})
            } catch (e) {
                console.log(e);
            }
        })();
    }

    render() {
        return (
            <div className="wrapper">
                <img
                    onClick={() => {
                    this.getNewEp(Number(this.state.focusedEpId - 1));
                }}
                    src={leftArrowImg}
                    alt="left-arrow"
                    className="slider-button casa-left"/>
                <img className="slider-img" src={this.state.imgUrl} alt="img"/>
                <img
                    onClick={() => {
                    this.getNewEp(Number(this.state.focusedEpId + 1));
                }}
                    alt="right-arrow"
                    className="slider-button case-right"
                    src={rightArrowImg}/>
            </div>
        )
    }
}

export default Slider;