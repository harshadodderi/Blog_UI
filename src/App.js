import React from "react";
import ShowPostOnly from "./components/users/ShowPostOnly";
import List from "./components/users/List";
import Home from "./components/users/Home";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import UserPostShow from "./components/users/UserPostShow";
import PostDetails from "./components/users/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to='/users'>Home </Link>
        <Link to='/users/list'>List </Link>
        <Link to='/users/ShowPostOnly'>Posts </Link>

        <Route path='/users' exact component={Home} />
        <Route path='/users/list' exact component={List} />
        <Route path='/users/ShowPostOnly' exact component={ShowPostOnly} />
        <Route path='/users/list/:id' component={UserPostShow} />
        <Route path='/users/ShowPostOnly/:pid' component={PostDetails} />
      </div>
    </BrowserRouter>
  );
}

export default App;
