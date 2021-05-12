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
import deleteCache from './components/delete-cache/delete-cache';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Cache-IT Welcome Page!</Link>
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
            <li>
              <Link to="/edit-cache">Delete Cache</Link>
            </li>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/" component={landingPage}>
            </Route>
            <Route path="/user-page" component={userPage}>
            </Route>
            <Route path="/create-new-cache" component={createNewCache}>
            </Route>
            <Route path="/edit-cache" component={editCache}>
            </Route>
            <Route path="/delete-cache" component={deleteCache}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

