import { connect } from 'react-data-actions';
import Dropzone from 'react-dropzone';
import React from 'react';


class Upload extends React.Component {
  static propTypes = {
    book: React.PropTypes.object,
  };
  render() {
    return(
      <div className="book">
        {this.props.book.name}
      </div>
      )
  }
}

export default connect(Upload)