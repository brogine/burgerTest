import React, { Component } from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    const _showSideDrawer = !this.state.showSideDrawer;
    this.setState({ showSideDrawer: _showSideDrawer });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar
          open={this.state.showSideDrawer}
          onMenuClicked={this.sideDrawerClosedHandler}
        />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main style={{ marginTop: 72 }}>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
