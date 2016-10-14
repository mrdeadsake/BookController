import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';

class Book extends React.Component {
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

export default connect(Book)