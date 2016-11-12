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

const charOptions = [{id: 2, name: "Kaladin", book_id: 3}, {id: 1, name: "Szeth", book_id: 3}];

class BookSeriesShow extends React.Component {

  constructor(...args){
    super(...args);
    this.state={current_chapter: 1, characterObject: charOptions[1]};
    this.onSliderInputChange = ::this.onSliderInputChange;
    this.onCharSelect = ::this.onCharSelect;
  }

  static connectedActions (props) {
    return {
      show: bookSeriesActions.showAction({id: props.params.id}),
      invalidate: bookSeriesActions.invalidateShowAction(),
    }
  }

  onSliderInputChange(newValue) {
    const value = this.refs.chapter_slider.getValue();
    this.setState({
      current_chapter: value
    });
  }

  onCharSelect(filter) {
    this.setState({ characterObject: filter});
  }

  renderBooks() {
    const books = this.props.books;
    return books.map((book, i)=> {return <Book book={book} key={i}/>});
  }

  renderChapterName(){
    return(<span>{this.props.show.data.chapters[this.state.current_chapter]}</span>)
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