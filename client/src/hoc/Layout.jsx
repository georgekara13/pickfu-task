import React, { Component } from "react";

import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="pt-28 px-6 mb-24">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

export default Layout;
