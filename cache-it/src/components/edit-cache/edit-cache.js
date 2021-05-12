import React, { Component } from 'react';
import '../edit-cache/edit-cache.css'

class editCache extends Component {
  render() {
    return (
      <div class="ec-container">
        <h1>Edit Cache</h1>
        <form>
          <h4>Languages Used (Editable text)</h4>
          <div class="header-background">(placeholder for header background) </div>
          <div class="error-ref-snapshots">Box with reference of snapshots for error</div>
          <textarea class="ec-notes" placeholder="Notes go here.."></textarea>
          <textarea class="answer-solution" placeholder="Answer/Gist/Solution..."></textarea>
          <button class="ec-cancel-btn">Cancel</button>
          <button class="ec-save-btn">Save</button>
        </form>
      </div>
    )
  }
}

export default editCache;
