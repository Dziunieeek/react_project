import React, {Component} from "react";

import CSSModules from 'react-css-modules';
import styles from "./sass/Buildings.scss";

import * as BuildingsModel from './../../library/models/Buildings/Buildings';
import Building from "./../../library/views/Building/Building.js";

class Buildings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buildings: []
        };
    }

    componentDidMount() {
        const self = this;
        BuildingsModel
            .getBuildings()
            .then(function (snapshot) {
                const buildings = [];
                snapshot.forEach(function (child) {
                    buildings.push(child.val());
                });
                self.setState({buildings: buildings});
            });
    }

    render() {
        return (
            <div>
                <h3>This is Buildings view</h3>
                {this
                    .state
                    .buildings
                    .map((object, i) => <Building key={i} data={object}/>)}
            </div>
        );
    }
}

export default CSSModules(Buildings, styles);