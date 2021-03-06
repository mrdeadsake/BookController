import Book from './Book';
import React from 'react';
import _ from 'lodash';

export default class BookList extends React.Component {
  static propTypes = {
    books: React.PropTypes.array,
  };

  renderBooks() {
    const data = this.props.books;
    return data.map((item, i)=> {return <Book book={item} key={i}/>});
  }

  render() {
    return(
      <div className="book list">
        {this.renderBooks() }
      </div>
      )
  }
}