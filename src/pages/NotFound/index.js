import React, { Component } from "react";
import NotFoundImg from "../../../public/img/NotFound.png";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img src={NotFoundImg} alt="404" />
        <h2>No Page Found...</h2>
      </div>
    );
  }
}

export default {
  component: NotFound
};
