import { WaitFor } from 'transcend-react';
import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';

class Chapter extends React.Component {
  static propTypes = {
    chapter: React.PropTypes.object,
  };
  render() {
    console.log(this.props.chapter)
    return(
      <div className="some class">
        {this.props.chapter.name}
      </div>
      )
  }
}

export default connect(Chapter)