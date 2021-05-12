import React from 'react';
import '../create-cache/create-cache.css'

class createNewCache extends React.Component {
  render() {
    return (
      <>
        <div className="cnc-container">
          <h1>Create a New Cache</h1>
          <form>
            <h4>Languages Used (Editable text)</h4>
            <div className="header-background">(placeholder for header background) </div>
            <div className="error-ref-snapshots">Box with reference of snapshots for error </div>
            <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
            <textarea className="answer-solution" placeholder="Answer/Gist/Solution goes here.."></textarea>
            <button className="create-cache-it">Create-Cache</button>
          </form>
        </div>
      </>
    )
  }
}

export default createNewCache;