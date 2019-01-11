import React, {Component} from "react";

import CSSModules from 'react-css-modules';
import styles from "./sass/Footer.scss";

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div styleName="footer">
                <div styleName="menus">
                    <div styleName="menu">
                        <h3>Category 1</h3>
                        <ul>
                            <li>
                                <a styleName="link" href="#">One</a>
                            </li>
                            <li>
                                <a styleName="link" href="#">Two</a>
                            </li>
                            <li>
                                <a styleName="link" href="#">Three</a>
                            </li>
                        </ul>
                    </div>
                    <div styleName="menu">
                        <h3>Category 2</h3>
                        <ul>
                            <li>
                                <a styleName="link" href="#">One</a>
                            </li>
                            <li>
                                <a styleName="link" href="#">Two</a>
                            </li>
                            <li>
                                <a styleName="link" href="#">Three</a>
                            </li>
                        </ul>
                    </div>
                    <div styleName="menu">
                        <h3>Category 3</h3>
                        <ul>
                            <li>
                                <a styleName="link" href="#">One</a>
                            </li>
                            <li>
                                <a styleName="link" href="#">Two</a>
                            </li>
                            <li>
                                <a styleName="link" href="#">Three</a>
                            </li>
                        </ul>
                    </div>

                    <div styleName="menu">
                        <h3>Social Media</h3>
                        <div styleName="social-media-container">
                            <a href="#" className="fa fa-facebook" styleName="fa-facebook"></a>
                            <a href="#" className="fa fa-twitter" styleName="fa-twitter"></a>
                            <a href="#" className="fa fa-google" styleName="fa-google"></a>
                            <a href="#" className="fa fa-linkedin" styleName="fa-linkedin"></a>
                            <a href="#" className="fa fa-youtube" styleName="fa-youtube"></a>
                        </div>
                    </div>

                </div>
                <div styleName="copyrights">
                    <span styleName="left">(C) 2018 Dziunieeek
                    </span>
                    <span styleName="right">Powered by React</span>
                </div>
            </div>
        );
    }

}

export default CSSModules(Footer, styles);
