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

export default class BookSeriesListItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
  };

  constructor(...args){
    super(...args);
    this.state={current_chapter: 1, characterObject: {}};
    this.onSliderInputChange = ::this.onSliderInputChange;
    this.onCharSelect = ::this.onCharSelect;
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

  render() {
    console.log(this.props)
    const bookSeries = this.props.item;
    const books = bookSeries.books;
    const chapters = bookSeries.chapters;
    const characters = bookSeries.characters;
    const details = bookSeries.details;
    return(
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
      )
  }
}