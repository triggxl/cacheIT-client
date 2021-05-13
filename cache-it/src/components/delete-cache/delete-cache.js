import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DeleteCache extends Component {
  render() {
    const handleDeleteCache = () => {
      // delete cache (use state)
      // useHistory() to send to location
    }
    return (
      <div>
        <p>This Cache will be deleted.</p>
        <Link to="/user-page">
          <button>Cancel</button>
        </Link>
        <button onClick={handleDeleteCache}>Delete</button>
      </div>
    )
  }
}

export default DeleteCache;

// mental map of what each functionality does
// find id (filter) to delete and set new array to state
// make state variable that holds dummy data
// capitalize components

