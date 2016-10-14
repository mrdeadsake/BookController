import {characterDetailsActions } from '../actions/characterDetailsActions'
import { bookActions, chapterActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import { WaitFor, Dropdown, SliderInput } from 'transcend-react';
import Book from '../components/Book';
import BookList from '../components/BookList';
import { connect } from 'react-data-actions';
import Select from '../components/Select';
import React from 'react';
import Character from '../components/Character';
import _ from 'lodash';

class BookSeriesShow extends React.Component {

  constructor(...args){
    super(...args);
    this.state={current_chapter: 1};
    this.onSliderInputChange = ::this.onSliderInputChange;
  }

  static connectedActions (props, state) {
    return {
      show: bookSeriesActions.showAction({id: props.params.id}),
    }
  }

  onSliderInputChange(newValue) {
    const value = this.refs.chapter_slider.getValue();
    this.setState({
      current_chapter: value
    });
  }

  renderBooks() {
    const books = this.props.books;
    return books.map((book, i)=> {return <Book book={book} key={i}/>});
  }

  render() {
    const bookSeries = this.props.show.data || [];
    const books = bookSeries.books || [];
    const chapters = bookSeries.chapters || [];
    const characters = bookSeries.characters || [];
    const details = bookSeries.details || [];
    return(
      <section className="breathe">
        <WaitFor data={this.props.show} >
        <div>
          <SliderInput ref="chapter_slider" min={1} minText="1" max={chapters.length} maxText={(chapters.length).toString()} value={this.state.current_chapter} step={1} onChange={this.onSliderInputChange} />
          <Character character={characters[0]} details={details} chapters={chapters} chapter={this.state.current_chapter} />
          <Character character={characters[1]} details={details} chapters={chapters} chapter={this.state.current_chapter} />
        </div>
        </WaitFor>

      </section>
      )
  }
}

export default connect(BookSeriesShow)