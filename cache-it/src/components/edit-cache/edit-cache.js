import React, { Component } from 'react';
import '../edit-cache/edit-cache.css';
import { Link } from 'react-router-dom';

class EditCache extends Component {
  render() {
    return (
      <div className="ec-container">
        <h1>Edit Cache</h1>
        {/* controlled input pattern value onChange and setState */}
        <form>
          <h4>Languages Used (Editable text)</h4>
          <div className="header-background">(placeholder for header background) </div>
          <textarea className="code-section" placeholder="Place code here"></textarea>
          <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
          <textarea className="cnc-link" placeholder="Relevant Links"></textarea>
          <Link to="/user-page">
            <button className="ec-cancel-btn">Cancel</button>
          </Link>
          <button className="ec-save-btn">Save</button>
        </form>
      </div>
    )
  }
}

export default EditCache;
