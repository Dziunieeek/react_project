import React, {Component} from "react";
import {connect} from 'react-redux';

import {setResources, setProduction} from '../../actions';

import * as Resources from '../../library/models/Resources/Resources';
import * as Production from '../../library/models/Production/Production';

import CSSModules from 'react-css-modules';
import styles from "./sass/Secret.scss";

class Secret extends Component {

    componentDidMount() {
        const onGetResources = (snapshot) => {
            const resources = snapshot.val();
            this
                .props
                .setResources(resources);
        };
        Resources.getResources(this.props.user.uid, onGetResources);

        const onGetProduction = (snapshot) => {
            const production = snapshot.val();
            this
                .props
                .setProduction(production);
        };
        Production.getProduction(this.props.user.uid, onGetProduction);
    }

    increaseProduction() {
        Production.setProduction(this.props.user.uid, 'wood', this.props.production.wood + 5);
    }

    render() {
        return (
            <div>
                <h3 style={{
                    color: 'red'
                }}>This is secret page - only for logged-in users !</h3>
                <h4>Your email: {this.props.user.email}</h4>
                <h4>Your resources: W: {this.props.resources.wood}
                    I: {this.props.resources.iron}
                    S: {this.props.resources.stone}
                    F: {this.props.resources.food}</h4>
                <h4>Your production: W: {this.props.production.wood}
                    I: {this.props.production.iron}
                    S: {this.props.production.stone}
                    F: {this.props.production.food}</h4>
                <button onClick={() => this.increaseProduction()}>Increase</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {user, production, resources} = state;
    return {user, production, resources};
}

const SecretWithStyles = CSSModules(Secret, styles);
export default connect(mapStateToProps, {setResources, setProduction})(SecretWithStyles);