import Dropzone from 'react-dropzone';
import React from 'react';


export default class Upload extends React.Component {
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

