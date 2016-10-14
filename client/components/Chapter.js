import { WaitFor } from 'transcend-react';
import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';

class Chapter extends React.Component {
  static propTypes = {
    chapter: React.PropTypes.object.isRequired,
  };
  render() {
    return(
      <div>
          {this.props.chapter.id}
      </div>
      )
  }
}

export default connect(Chapter)