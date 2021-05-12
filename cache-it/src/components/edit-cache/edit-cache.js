import React, { Component } from 'react';
import '../edit-cache/edit-cache.css'

class editCache extends Component {
  render() {
    return (
      <div className="ec-container">
        <h1>Edit Cache</h1>
        <form>
          <h4>Languages Used (Editable text)</h4>
          <div className="header-background">(placeholder for header background) </div>
          <div className="error-ref-snapshots">Box with reference of snapshots for error</div>
          <textarea className="ec-notes" placeholder="Notes go here.."></textarea>
          <textarea className="answer-solution" placeholder="Answer/Gist/Solution..."></textarea>
          <button className="ec-cancel-btn">Cancel</button>
          <button className="ec-save-btn">Save</button>
        </form>
      </div>
    )
  }
}

export default editCache;
