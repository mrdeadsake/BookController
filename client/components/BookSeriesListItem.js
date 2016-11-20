import {characterDetailsActions } from '../actions/characterDetailsActions';
import { bookActions, chapterActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import WaitFor from '../components/WaitFor';
import NavDropdownSelect from '../components/NavDropdownSelect';
import SliderInput from '../components/SliderInput';
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

  constructor(...args){
    super(...args);
    this.state={current_chapter: 1, selectedBook: null};
    this.onSliderInputChange = ::this.onSliderInputChange;
    this.onCharSelect = ::this.onCharSelect;
    this.onChapterSelect = ::this.onChapterSelect;
    this.onSelectBook = ::this.onSelectBook;
  }

  componentDidMount() {
    if (this.props.item.characters && this.props.item.characters.length != 0) {
      this.setState({characterObject: this.props.item.characters[0]})
    }
  }

  onSliderInputChange(newValue) {
    const value = this.refs.chapter_slider.getValue();
    this.setState({
      current_chapter: value
    });
  }

  onSelectBook(book){
    this.setState({selectedBook: book});
  }

  renderBooks(){
    const books = this.props.item.books;
    return books.map((book, i)=> {return <div onClick={this.onSelectBook} className="row__cell--fixed" key={i}>{book.name}</div>});
  }

  renderBook(){
    if (this.state.selectedBook != null){
      return <BookSelect book={this.state.selectedBook} />
    }
  }

  renderSelectedBook() {
    if (this.state.selectedBook != null){
      return <Book book={this.state.selectedBook} item={this.props.item}/>
    }
  }

  onCharSelect(filter) {
    this.setState({ characterObject: filter});
  }

  onChapterSelect(chapter) {
    console.log(chapter);
    this.setState({
      current_chapter: chapter
    })
  }

  render() {
    const bookSeries = this.props.item;
    const books = bookSeries.books;
    const chapters = bookSeries.chapters;
    const characters = bookSeries.characters;
    const details = bookSeries.details;
    return(
        <div>
          <h1>{bookSeries.name}</h1>
          <BookSelect books={books} onSelect={this.onSelectBook} item={this.props.item}/>
          {this.renderSelectedBook()}
        </div>
      )
  }
}