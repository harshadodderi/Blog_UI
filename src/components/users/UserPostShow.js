import React, { Component } from "react";
import Axios from "axios";

export default class UserPostShow extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      posts: [],
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(
      (response) => {
        this.setState({
          name: response.data.name,
          username: response.data.username,
        });
        Axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        ).then((response) => {
          this.setState({ posts: response.data });
        });
      }
    );
  }

  render() {
    return (
      <div>
        <h2>Name: {this.state.name}</h2>
        <h3>USERNAME : {this.state.username}</h3>
        <h4>
          <b>Posts</b>
        </h4>
        {this.state.posts.map((post, i) => {
          return <li key={i}>{post.title}</li>;
        })}
      </div>
    );
  }
}
