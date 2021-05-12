import React, { Component } from 'react';
import '../user-page/user-page.css';

class userPage extends Component {
  render() {
    return (
      <>
        <div class="up-container">
          <h1>User Page</h1>
          <div class="header-background"> (placeholder for header background) </div>
          <div class="cache-container">
            <br />
            <h3>My Caches</h3>
            <button class="new-cache">Add New Cache</button>
            <label>(This button will open a modal to create a new cache)</label>
            <section class="my-caches">
              <div id="cache-1">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted </header>
                <textarea>Description of error and steps taken go here..</textarea>
                <div class="up-buttons">
                  <button class="edit-btn">Edit Cache</button>
                  {/* (button brings up 'edit' modal) */}
                  <button class="delete-btn">Delete Cache</button>
                  {/* (delete prompt "Delete Cache"? with cancel and Delete buttons below) */}
                </div>
              </div>
              <div id="cache-2">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted</header>
                <textarea>Description of error & steps taken go here..</textarea>
                <div class="up-buttons">
                  <button class="edit-btn">Edit Cache</button>
                  <button class="delete-btn">Delete Cache</button>
                </div>
              </div>
              <div id="cache-3">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted</header>
                <textarea>Description of error & steps taken go here..</textarea>
                <div class="up-buttons">
                  <button class="edit-btn">Edit Cache</button>
                  <button class="delete-btn">Delete Cache</button>
                </div>
              </div>
              <div id="cache-4">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted</header>
                <textarea>Description of error & steps taken go here..</textarea>
                <div class="up-buttons">
                  <button class="edit-btn">Edit Cache</button>
                  <button class="delete-btn">Delete Cache</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default userPage;
