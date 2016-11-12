import React from 'react';
import BookModal from '../views/BookModal';
export default class BookControlApp extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render () {
    return (
      <div>
        { this.props.children }
        <BookModal />
      </div>
    );
  }

}
