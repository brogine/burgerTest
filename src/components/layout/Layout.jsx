import React from "react";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
  <React.Fragment>
    <Toolbar />
    <SideDrawer />
    <main style={{ marginTop: 72 }}>{props.children}</main>
  </React.Fragment>
);

export default layout;
