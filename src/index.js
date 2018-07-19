import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from 'react-router';

import App from "./routes/App.js";

import "./styles/index.css";

ReactDOM.render((
	<App />
), document.getElementById("root"));