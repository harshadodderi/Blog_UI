import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class PostDetails extends Component {
  constructor() {
    super();
    this.state = {
      users: "",
      titlebody: "",
      body: "",
      name: "",
      id: "",
      comments: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.pid;

    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(
      (response) => {
        this.setState({
          body: response.data.body,
          users: response.data.userId,
          title: response.data.title,
        });
        Axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        ).then((response) => {
          this.setState({ comments: response.data });
          console.log(response.data);
        });

        Axios.get(
          `https://jsonplaceholder.typicode.com/users/${this.state.users}`
        ).then((response) => {
          this.setState({ name: response.data.name, id: response.data.id });
        });
      }
    );
  }

  render() {
    return (
      <div>
        <h1>Name :{this.state.name} </h1>
        <h2>Title:{this.state.title} </h2>
        <h3>Body:{this.state.body} </h3>
        <h4>
          {this.state.comments.map((items, i) => {
            return (
              <li key={i}>
                <small>{items.body}</small>
              </li>
            );
          })}
        </h4>
        <Link to={`/users/list/${this.state.id}`}>
          <p> More post from the Author {this.state.name}</p>
        </Link>
      </div>
    );
  }
}
