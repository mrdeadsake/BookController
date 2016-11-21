import {characterDetailsActions } from '../actions/characterDetailsActions';
import { bookActions, chapterActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import WaitFor from '../components/WaitFor';
import NavDropdownSelect from '../components/NavDropdownSelect';
import SliderInput from '../components/SliderInput';
import Book from '../components/Book';
import BookList from '../components/BookList';
import BookSeriesListItem from '../components/BookSeriesListItem';
import { connect } from 'react-data-actions';
import React from 'react';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import _ from 'lodash';

class BookSeriesShow extends React.Component {

  constructor(...args){
    super(...args);
  }

  static connectedActions (props) {
    return {
      show: bookSeriesActions.showAction({id: props.params.id}),
      invalidate: bookSeriesActions.invalidateShowAction(),
    }
  }

  renderBooks() {
    const books = this.props.show.books;
    return books.map((book, i)=> {return <Book book={book} key={i}/>});
  }

  render() {
    const bookSeries = this.props.show.data || {};
    return(
      <section className="breathe">
        <WaitFor data={this.props.show} >
          <BookSeriesListItem item ={bookSeries} />
        </WaitFor>
      </section>
      )
  }
}

export default connect(BookSeriesShow)