import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../user-page/user-page.css';

class UserPage extends Component {
  render() {
    return (
      <>
        <div className="up-container">
          <h1>User Page</h1>
          <Link to="/">
            <h4>Home</h4>
          </Link>
          <div className="header-background"> (placeholder for header background) </div>
          <div className="cache-container">
            <br />
            <h3>My Caches</h3>
            <Link to="/create-new-cache">
              <button className="new-cache">Add New Cache</button>
            </Link>
            <section className="my-caches">
              <div id="cache-1">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted </header>
                <textarea className="code-section" placeholder="Place code here"></textarea>
                <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
                <textarea className="cnc-link" placeholder="Relevant Links"></textarea>
                <div className="up-buttons">
                  <Link to="/edit-cache/:id">
                    <button className="edit-btn">Edit Cache</button>
                  </Link>
                  {/* (button brings up 'edit' modal) */}
                  <Link to="/delete-cache/:id">
                    <button className="delete-btn">Delete Cache</button>
                  </Link>
                </div>
              </div>
              <div id="cache-2">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted </header>
                <textarea className="code-section" placeholder="Place code here"></textarea>
                <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
                <textarea className="cnc-link" placeholder="Relevant Links"></textarea>
                <div className="up-buttons">
                  <Link to="/edit-cache/:id">
                    <button className="edit-btn">Edit Cache</button>
                  </Link>
                  {/* (button brings up 'edit' modal) */}
                  <Link to="/delete-cache/:id">
                    <button className="delete-btn">Delete Cache</button>
                  </Link>
                </div>
              </div>
              <div id="cache-3">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted </header>
                <textarea className="code-section" placeholder="Place code here"></textarea>
                <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
                <textarea className="cnc-link" placeholder="Relevant Links"></textarea>
                <div className="up-buttons">
                  <Link to="/edit-cache/:id">
                    <button className="edit-btn">Edit Cache</button>
                  </Link>
                  {/* (button brings up 'edit' modal) */}
                  <Link to="/delete-cache/:id">
                    <button className="delete-btn">Delete Cache</button>
                  </Link>
                </div>
              </div>
              <div id="cache-4">
                <h3>Cache-Title</h3>
                <header>Each 'cache' represents a developer issue that can be edited or deleted </header>
                <textarea className="code-section" placeholder="Place code here"></textarea>
                <textarea className="cnc-notes" placeholder="Notes go here.."></textarea>
                <textarea className="cnc-link" placeholder="Relevant Links"></textarea>
                <div className="up-buttons">
                  <Link to="/edit-cache/:id">
                    <button className="edit-btn">Edit Cache</button>
                  </Link>
                  {/* (button brings up 'edit' modal) */}
                  <Link to="/delete-cache/:id">
                    <button className="delete-btn">Delete Cache</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </>
    )
  }
}

export default UserPage;
