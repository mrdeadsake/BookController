import { connect } from 'react-data-actions';
import React from 'react';

class About extends React.Component {

  static connectedActions () {
    return {
    }
  }
  render() {
    return(
      <div className="">
        <div className="">
          <div>My name is Derek Adams, I'm a software engineer living and working in San Diego, CA currently.</div>
          <div>I'm a full-stack engineer developing web applications that include the following in my tech stack:</div>
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