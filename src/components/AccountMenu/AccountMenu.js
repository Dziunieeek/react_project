import React, { Component } from "react";
import { hot } from "react-hot-loader";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

class AccountMenu extends Component {

	constructor(props) {
		super(props);

		this.state = {
			anchorEl: null,
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}
  

  handleClick(event) {
	this.setState({ anchorEl: event.currentTarget });
  }

  handleClose(){
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
		<div>
			<IconButton onClick={this.handleClick}>
				<Tooltip title="Account">
					<Icon className="icon">account_circle</Icon>
				</Tooltip>
			</IconButton>
						
        	<Menu id="account-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
				<MenuItem onClick={this.handleClose}>My account</MenuItem>
          		<MenuItem onClick={this.handleClose}>Logout</MenuItem>
       		</Menu>
      </div>
    );
  }
}

export default hot(module)(AccountMenu);