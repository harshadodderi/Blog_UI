import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const users = response.data;
      this.setState({ users });
    });
  }
  render() {
    return (
      <div>
        <h1>Listing the users - {this.state.users.length}</h1>
        {this.state.users.map((user, i) => (
          <li key={i}>
            <Link to={`/users/list/${user.id}`}> {user.name}</Link>
          </li>
        ))}
      </div>
    );
  }
}
