import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import landingPage from './components/landing-page/landing-page';
import UserPage from './components/user-page/user-page';
import CreateNewCache from './components/create-cache/create-new-cache';
import EditCache from './components/edit-cache/edit-cache';
import './App.css';
import DeleteCache from './components/delete-cache/delete-cache';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={landingPage}>
            </Route>
            <Route path="/user-page" component={UserPage}>
            </Route>
            <Route path="/create-new-cache" component={CreateNewCache}>
            </Route>
            <Route path="/edit-cache/:id" component={EditCache}>
            </Route>
            <Route path="/delete-cache/:id" component={DeleteCache}>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

