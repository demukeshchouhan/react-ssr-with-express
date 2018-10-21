import React, { Component } from "react";
import { renderRoutes } from "react-router-config";
import PropTypes from "prop-types";
import Header from "../components/Header";

class AppContainer extends Component {
  static defaultProps = {
    route: {}
  };
  static propTypes = {
    route: PropTypes.instanceOf(Object)
  };
  render() {
    const { route } = this.props;
    return (
      <div className="AppContainer">
        <Header />
        {renderRoutes(route.routes)}
      </div>
    );
  }
}

export default {
  component: AppContainer
};
