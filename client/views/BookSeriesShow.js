import {chapterActions } from '../actions/chapterActions'
import {characterDetailsActions } from '../actions/characterDetailsActions'
import { bookActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import { WaitFor, Dropdown } from 'transcend-react';
import Book from '../components/Book';
import BookList from '../components/BookList';
import { connect } from 'react-data-actions';
import Select from '../components/Select';
import React from 'react';
import _ from 'lodash';

class BookSeriesShow extends React.Component {

  static connectedActions (props) {
    return {
      show: bookSeriesActions.showAction({id: props.params.id}),
      books: bookActions.indexAction({id: props.params.id})
    }
  }

  renderBooks() {
    const books = this.props.books;
    console.log(books);
    return books.map((book, i)=> {return <Book book={book} key={i}/>});
  }

  render() {
    const bookSeries = this.props.show.data || [];
    const books = this.props.books.data || [];
    console.log(books);
    return(
      <section className="breathe">
        <WaitFor data={this.props.books} >
          <BookList books={books}/>
        </WaitFor>
      </section>
      )
  }
}

export default connect(BookSeriesShow)