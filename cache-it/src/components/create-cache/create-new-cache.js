import React from 'react';
import '../create-cache/create-cache.css';
import { Link } from 'react-router-dom';


class CreateNewCache extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // cacheErrors: [
      //   notes = '',
      //   code = ''
      // ]
    }
  }
  render() {
    return (
      <>
        <div className="cnc-container">
          <h1>Create a New Cache</h1>
          {/* controlled input pattern value onChange and setState */}
          <form>
            <h4>Languages Used (Editable text)</h4>
            <div className="header-background">(placeholder for header background) </div>
            <textarea className="code-section" placeholder="Place code here"></textarea>
            <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
            <textarea className="cnc-link" placeholder="Relevant Links"></textarea>
            <Link to="/user-page">
              <button className="create-cache-it">Cancel</button>
            </Link>
            <Link to="/user-page">
              <button className="create-cache-it">Create-Cache</button>
            </Link>
          </form>
        </div>
      </>
    )
  }
}

export default CreateNewCache;