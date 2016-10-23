import {characterDetailsActions } from '../actions/characterDetailsActions';
import { bookActions, chapterActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import WaitFor from '../components/WaitFor';
import NavDropdownSelect from '../components/NavDropdownSelect';
import SliderInput from '../components/SliderInput';
import Book from '../components/Book';
import BookList from '../components/BookList';
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
          <div className="row">
            <Chapter chapters={chapters} chapter={this.state.current_chapter}/>
          </div>
          <NavDropdownSelect
            label=""
            onSelect={this.onCharSelect}
            options={ characters }
            textKey="name"
            valueKey="id"
            selectedText={this.state.characterObject.name}
          />
          <Character character={this.state.characterObject} details={details} chapters={chapters} chapter={this.state.current_chapter}/>

        </div>
        </WaitFor>

      </section>
      )
  }
}

export default connect(BookSeriesShow)