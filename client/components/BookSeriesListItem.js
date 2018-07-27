import WaitFor from '../components/WaitFor';
import NavDropdownSelect from '../components/NavDropdownSelect';
import Book from '../components/Book';
import BookSelect from '../components/BookSelect';
import BookList from '../components/BookList';
import React from 'react';
import Character from '../components/Character';
import Chapter from '../components/Chapter';

export default class BookSeriesListItem extends React.Component {
  static propTypes = {
    bookSeries: React.PropTypes.object,
  };

  constructor(props){
    super(props);
    if (props.bookSeries != undefined && props.bookSeries[0] != undefined) {
     this.state={selectedBook: props.bookSeries.books[0]};      
    }
    this.onSelectBook = ::this.onSelectBook;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedBook: nextProps.bookSeries.books[0]})
  }

  onSelectBook(book){
    this.setState({selectedBook: book});
  }

  renderSelectedBook() {
    if (this.state != null && this.state.selectedBook != null){
      return <Book book={this.state.selectedBook} bookSeries={this.props.bookSeries} />
    }
  }

  render() {
    const bookSeries = this.props.bookSeries || {};
    let books = [];
    let selectedBook = {};
    if (bookSeries != {}) {
      books = bookSeries.books || [];
    }
    if (this.state != null && this.state.selectedBook != undefined) {
      selectedBook = this.state.selectedBook
    }

    return(
        <div>
          <h1>{bookSeries.name}</h1>
          <BookSelect books={books} onSelect={this.onSelectBook} item={this.props.item} selectedValue={selectedBook} />
          {this.renderSelectedBook()}
        </div>
      )
  }
}