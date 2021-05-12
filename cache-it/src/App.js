import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import landingPage from './components/landing-page/landing-page';
import userPage from './components/user-page/user-page';
import createNewCache from './components/create-cache/create-new-cache';
import editCache from './components/edit-cache/edit-cache';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Welcome To Cache-IT!</Link>
            </li>
            <li>
              <Link to="/user-page">User Page</Link>
            </li>
            <li>
              <Link to="/create-new-cache">Create New Cache (Modal)</Link>
            </li>
            <li>
              <Link to="/edit-cache">Edit Cache (Modal)</Link>
            </li>
          </ul>
          <hr />
          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/" component={landingPage}>
            </Route>
            <Route path="/user-page" component={userPage}>
            </Route>
            <Route path="/create-new-cache" component={createNewCache}>
            </Route>
            <Route path="/edit-cache" component={editCache}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

