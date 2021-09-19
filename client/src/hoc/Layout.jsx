import React, { Component } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="relative min-h-screen">
          <div className="pt-28 px-6 pb-48">{this.props.children}</div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
