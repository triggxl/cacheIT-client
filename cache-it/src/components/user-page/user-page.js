import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../user-page/user-page.css';

class UserPage extends Component {
  render() {
    const { cacheList } = this.props;
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
            {cacheList.map(cacheIssue => (
              <section key={cacheIssue.id} className="my-caches">
                <div id="cache-1">
                  <h3 className="title" >{cacheIssue.cncTitle}</h3>
                  <p className="code-section" >{cacheIssue.cncCode}</p>
                  <p className="cnc-notes" >{cacheIssue.cncNotes}</p>
                  <p className="cnc-link" >{cacheIssue.cncLinks}</p>
                  <div className="up-buttons">
                    <Link to={`/edit-cache/${cacheIssue.id}`}>
                      <button className="edit-btn">Edit Cache</button>
                    </Link>
                    <Link to={`/delete-cache/${cacheIssue.id}`}>
                      <button className="delete-btn">Delete Cache</button>
                    </Link>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </>
    )
  }
}

export default UserPage;
