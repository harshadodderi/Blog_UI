import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ShowPostOnly extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const data = response.data;

        this.setState({ data });
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  render() {
    return (
      <div>
        <h1>Total Posts -{this.state.data.length}</h1>
        {this.state.data.map((title, i) => {
          return (
            <li key={i}>
              <Link to={`/users/ShowPostOnly/${title.id}`}>{title.title}</Link>
            </li>
          );
        })}
      </div>
    );
  }
}
