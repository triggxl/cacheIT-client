import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeleteCache extends Component {
  render() {
    return (
      <div>
        <p>This Cache will be deleted.</p>
        <Link to="/user-page">
          <button>Cancel</button>
          <button onClick={() => this.props.handleDeleteCache(this.props.deletedCacheId)}>Delete</button>
        </Link>
      </div>
    )
  }
}

export default DeleteCache;

// mental map of what each functionality does
// find id (filter) to delete and set new array to state
// make state variable that holds dummy data
// capitalize components

