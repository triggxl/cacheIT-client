import React, { Component } from 'react';
import '../edit-cache/edit-cache.css';
import { Link, Redirect } from 'react-router-dom';

class EditCache extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editedTitle: props.editedCache.cncTitle,
      editedCode: props.editedCache.cncCode,
      editedNotes: props.editedCache.cncNotes,
      editedLinks: props.editedCache.cncLinks,
      redirect: false
    }
  }
  handleEditCache = (e) => {
    e.preventDefault();
    this.props.handleEditCache({
      cncTitle: this.state.editedTitle,
      cncCode: this.state.editedCode,
      cncNotes: this.state.editedNotes,
      cncLinks: this.state.editedLinks,
      id: this.props.editedCache.id
    })
    this.setState({ redirect: true })
    console.log(this.state.editedCode)
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/user-page" />
    }
    return (
      <div className="ec-container">
        <h1>Edit Cache</h1>
        {/* controlled input pattern value onChange and setState */}
        <form onSubmit={this.handleEditCache}>
          <h4>Languages Used (Editable text)</h4>
          <div className="header-background">(placeholder for header background) </div>
          <textarea className="title" onChange={(e) => this.setState({ editedTitle: e.target.value })} value={this.state.editedTitle}></textarea>
          <textarea className="code-section" onChange={(e) => this.setState({ editedCode: e.target.value })} value={this.state.editedCode}></textarea>
          <textarea className="cnc-notes" onChange={(e) => this.setState({ editedNotes: e.target.value })} value={this.state.editedNotes}></textarea>
          <textarea className="cnc-link" onChange={(e) => this.setState({ editedLinks: e.target.value })} value={this.state.editedLinks}></textarea>
          <Link to="/user-page">
            <button className="ec-cancel-btn">Cancel</button>
          </Link>
          <button type="submit" className="ec-save-btn">Save</button>
        </form>
      </div>
    )
  }
}

export default EditCache;
