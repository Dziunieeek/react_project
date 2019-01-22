import React, {Component} from "react";

import Icon from "@material-ui/core/Icon";
import Button from '@material-ui/core/Button';

import CSSModules from "react-css-modules";
import styles from "./sass/Building.scss";

class Building extends Component {

    render() {
        return (
            <div styleName="container">
                <div styleName="image">
                    <Icon styleName="icon">home</Icon>
                </div>
                <div styleName="name">
                    {this.props.data.name}
                </div>
                <div styleName="description">
                    {this.props.data.description}
                </div>
                <div styleName="cost">
                    W {this.props.data.cost.wood} |
                    I {this.props.data.cost.iron}  |
                    S {this.props.data.cost.stone}  |
                    F {this.props.data.cost.food}</div>
                <div styleName="profit">
                    {this.props.data.profit}
                </div>
                <div styleName="actions">
                    <Button color="primary">Build it</Button>
                </div>
            </div>
        );
    }

}

export default CSSModules(Building, styles);
