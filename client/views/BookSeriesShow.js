import {characterDetailsActions } from '../actions/characterDetailsActions';
import { bookActions, chapterActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import { characterActions } from '../actions/characterActions';
import modalActions from '../actions/modalActions';
import WaitFor from '../components/WaitFor';
import NavDropdownSelect from '../components/NavDropdownSelect';
import Book from '../components/Book';
import BookList from '../components/BookList';
import BookSeriesListItem from '../components/BookSeriesListItem';
import { connect } from 'react-data-actions';
import React from 'react';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import UploadCSVModal from '../modals/UploadCSVModal';
import _ from 'lodash';

class BookSeriesShow extends React.Component {

  constructor(...args){
    super(...args);
    this.onSet = ::this.onSet;
  }

  static connectedActions (props) {
    return {
      show: bookSeriesActions.showAction({id: props.params.id}),
      invalidate: bookSeriesActions.invalidateShowAction(),
      setModal: modalActions.setAction(),
      upload: characterActions.createAction({id: props.params.id}),
    }
  }

  renderBooks() {
    const books = this.props.show.books;
    return books.map((book, i)=> {return <Book book={book} key={i}/>});
  }

  onSet() {
    this.props.setModal(<UploadCSVModal upload={this.props.upload} id={this.props.params.id}/>)
  }

  renderButton() {
    return(<button className="btn btn-sm add-details" onClick={this.onSet}>Add More Details With CSV</button>)
  }

  renderBookSeriesListItems() {
    const books = this.props.show.data || {};
    if (books != {}){
      return (<BookSeriesListItem item ={books} />)
    } else {
      return (null)
    }
              
  }

  render() {
    return(
      <section className="breathe">
        <WaitFor data={this.props.show} >
          { this.renderBookSeriesListItems()}
        </WaitFor>
        { this.renderButton() }
      </section>
      )
  }
}

export default connect(BookSeriesShow)