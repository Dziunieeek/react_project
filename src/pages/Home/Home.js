import React, {Component} from "react";

import Icon from "@material-ui/core/Icon";

import CSSModules from 'react-css-modules';
import styles from "./sass/Home.scss";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {this
                        .state
                        .date
                        .toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default CSSModules(Home, styles);