import React, { Component } from 'react';
import '../landing-page/landing-page.css';

class landingPage extends Component {
  render() {
    return (
      <div class="lp-app-container">
        <h1>Cache-IT</h1>
        <p>CacheIT is an application designed to log the errors you come across as a developer.<br />
      That way you are able to reference them in a purposeful and organized manner. <br />This helps us to better
      understand the issues we run into and solve them more efficiently. <br />Being able to see the steps you took to
      solve the issue at hand makes it easier to reference the next time it arises. <br />Plan on being able to share
      your Cache's in the next release! Enjoy the app. And happy coding!</p>
        <button>Let's Get Started</button>
        <p>(button routes to user page)</p>
      </div>
    )
  }
}

export default landingPage;