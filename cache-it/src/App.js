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
  constructor(props) {
    super(props);
    this.state = {
      caches: [
        {
          id: '123',
          cncTitle: 'Error',
          cncCode: 'aofdijaof',
          cncNotes: 'afodijdoij',
          cncLinks: 'aofdijafoeifej'

        },
        {
          id: '1234',
          cncTitle: 'Error',
          cncCode: 'aofdijaof',
          cncNotes: 'afodijdoij',
          cncLinks: 'aofdijafoeifej'

        },
        {
          id: '12345',
          cncTitle: 'Error',
          cncCode: 'aofafdijaof',
          cncNotes: 'afljfodijdoij',
          cncLinks: 'ojiaofdijafoeifej'

        }
      ]
    }
  }

  addCache = (newCache) => {
    console.log('add cache')
    this.setState({
      // create copy and add newCache obj
      caches: [...this.state.caches, newCache]
    })
  }
  editCache = (revisedCache) => {
    console.log(revisedCache)
    // how to edit an object from an array's state
    // make copy of state
    const cachesCopy = [...this.state.caches]
    // find one to modify
    let cacheIndex = cachesCopy.findIndex(cache => cache.id === revisedCache.id)
    cachesCopy[cacheIndex] = revisedCache
    // revise state (new state with )
    this.setState({ caches: cachesCopy })
  }
  deleteCache = (id) => {
    this.setState({
      caches: this.state.caches.filter(cache => cache.id !== id)
    })

  }

  render() {
    console.log(this.state.caches)
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={landingPage}>
            </Route>
            <Route
              path="/user-page"
              render={() => (
                // name: function
                <UserPage cacheList={this.state.caches} />
              )}
            >
            </Route>
            <Route
              path='/create-new-cache'
              render={() => (
                <CreateNewCache submitNewCache={this.addCache} />
              )}
            />
            <Route
              path='/edit-cache/:id'
              render={(routerProps) => (
                <EditCache handleEditCache={this.editCache} editedCache={this.state.caches.find(cache => cache.id === routerProps.match.params.id)} />
              )}
            />
            <Route
              path='/delete-cache/:id'
              render={(routerProps) => (
                <DeleteCache handleDeleteCache={this.deleteCache} deletedCacheId={routerProps.match.params.id} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

