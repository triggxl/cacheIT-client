import React from 'react';
import '../create-cache/create-cache.css';
import { Link, Redirect } from 'react-router-dom';
import UUID from 'react-uuid';


class CreateNewCache extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cncTitle: '',
      cncCode: '',
      cncNotes: '',
      cncLinks: '',
      redirect: false
    }
  }
  submitHandler = (e) => {
    e.preventDefault();
    // calls actual fx to bypass onSubmit event
    this.props.submitNewCache({
      id: UUID(),
      cncTitle: this.state.cncTitle,
      cncCode: this.state.cncCode,
      cncNotes: this.state.cncNotes,
      cncLinks: this.state.cncLinks
    })
    this.setState({ redirect: true })
    // redirect here
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="user-page" />
    }
    return (
      <>
        <div className="cnc-container">
          <h1>Create a New Cache</h1>
          {/* controlled input pattern value onChange and setState */}
          <form onSubmit={this.submitHandler}>
            <div className="header-background">(placeholder for header background) </div>
            <textarea className="title" placeholder="Cache Title" onChange={(e) => this.setState({ cncTitle: e.target.value })} value={this.state.cncTitle} required></textarea>
            <textarea className="code-section" placeholder="Place code here" onChange={(e) => this.setState({ cncCode: e.target.value })} value={this.state.cncCode} ></textarea>
            <textarea className="cnc-notes" placeholder="Notes go here.." onChange={(e) => this.setState({ cncNotes: e.target.value })} value={this.state.cncNotes} required></textarea>
            <textarea className="cnc-link" placeholder="Relevant Links" onChange={(e) => this.setState({ cncLinks: e.target.value })} value={this.state.cncLinks}></textarea>
            <Link to="/user-page">
              <button className="create-cache-it">Cancel</button>
            </Link>
            <button type="submit" className="create-cache-it">Create-Cache</button>
          </form>
        </div>
      </>
    )
  }
}

export default CreateNewCache;

// basics of react and data structures fireship.io TraversyMedia webDevSimplified