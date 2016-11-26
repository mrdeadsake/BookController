import { connect } from 'react-data-actions';
import React from 'react';

class About extends React.Component {

  static connectedActions () {
    return {
    }
  }
  render() {
    return(
      <div className="row">
        <div className="row__cell">
          <div>My name is Derek Adams, I'm a software engineer living and working in Salt Lake City, Utah currently looking to relocate to San Diego.</div>
          <div>I'm a full-stack engineer developing web applications that include the following in our tech stack:</div>
          <div>ReactJS</div>
          <div>Webpack</div>
          <div>NPM</div>
          <div>Ruby on Rails</div>
          <div>Sidekiq</div>
          <div>PostgreSQL</div>
          <div>Git source control </div>
          <div>and many others.</div>
        </div>
      </div>
      )
  }
}

export default connect(About)