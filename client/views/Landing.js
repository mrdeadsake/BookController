import { connect } from 'react-data-actions';
import React from 'react';

class Landing extends React.Component {

  static connectedActions () {
    return {
    }
  }
  render() {
    return(
      <div className="row">
        <div className="row__cell">
          Welcome to spoilerfreebooks.com, this website is intended to be a helpful resource for looking up information without having to worry about spoiling information.
        </div>
      </div>
      )
  }
}

export default connect(Landing)