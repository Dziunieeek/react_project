import React, {Component} from "react";

import CSSModules from 'react-css-modules';
import styles from "./sass/AdminPanel.scss";

class AdminPanel extends Component {

    render() {
        return (
            <div>
                <h3>This is panel for administrator.</h3>
            </div>
        );
    }
}

export default CSSModules(AdminPanel, styles);