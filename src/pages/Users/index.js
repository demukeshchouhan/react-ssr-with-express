import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions";

class Users extends Component {
  //   componentWillMount = () => {
  //     console.log("server cwm");
  //     this.props.fetchUsers();
  //   };

  //   componentDidMount = () => {
  //     console.log("server cdm");
  //     this.props.fetchUsers();
  //   };

  renderUsers = () => {
    if (this.props.users) {
      return this.props.users.map((user, index) => {
        return <li key={index}>{user.name}</li>;
      });
    }
    return <div>Loading...</div>;
  };

  render() {
    console.log("rendering...");
    return (
      <div>
        <h3>users list</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}
// loadDataOnServer is a function which will be
// called on server and once it's resolved it will render the
// corrsponded component with html
// @usecase: fetch API on server and create HTMl

export const loadDataOnServer = store => {
  return store.dispatch(fetchUsers());
};

const mapState = state => ({ ...state });
const mapProps = { fetchUsers };

export default {
  loadDataOnServer,
  component: connect(
    mapState,
    mapProps
  )(Users)
};
