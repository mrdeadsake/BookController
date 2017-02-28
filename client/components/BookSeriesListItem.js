import {characterDetailsActions } from '../actions/characterDetailsActions';
import { bookActions, chapterActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import WaitFor from '../components/WaitFor';
import NavDropdownSelect from '../components/NavDropdownSelect';
import Book from '../components/Book';
import BookSelect from '../components/BookSelect';
import BookList from '../components/BookList';
import { connect } from 'react-data-actions';
import React from 'react';
import Character from '../components/Character';
import Chapter from '../components/Chapter';

export default class BookSeriesListItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
  };

  constructor(props){
    super(props);
    this.state={selectedBook: props.item.books[0]};
    this.onSelectBook = ::this.onSelectBook;
  }

  componentWillReceiveProps(nextProps) {
    //console.log(nextProps);
    this.setState({selectedBook: nextProps.item.books[0]})
  }

  componentDidMount() {
    // if (this.props.item.characters && this.props.item.characters.length != 0) {
    //   this.setState({characterObject: this.props.item.characters[0]})
    // }
  }

  onSelectBook(book){
    this.setState({selectedBook: book});
  }

  renderSelectedBook() {
    //console.log(this.state.selectedBook)
    if (this.state.selectedBook != null){
      return <Book book={this.state.selectedBook} item={this.props.item} />
    }
  }

  render() {
    const bookSeries = this.props.item;
    const books = bookSeries.books;
    return(
        <div>
          <h1>{bookSeries.name}</h1>
          <BookSelect books={books} onSelect={this.onSelectBook} item={this.props.item} selectedValue={this.state.selectedBook} />
          {this.renderSelectedBook()}
        </div>
      )
  }
}