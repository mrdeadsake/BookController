import { fetchBookSeries } from '../actions/bookSeriesActions';
import { characterActions } from '../actions/characterActions';
import NavDropdownSelect from '../components/NavDropdownSelect';
import Book from '../components/Book';
import BookList from '../components/BookList';
import BookSeriesListItem from '../components/BookSeriesListItem';
import { connect } from 'react-redux';
import React from 'react';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import UploadCSVModal from '../modals/UploadCSVModal';
import _ from 'lodash';

class BookSeriesShow extends React.Component {

  constructor(...args){
    super(...args);
    this.state = {
      modal: false,
    }
  }

  componentDidMount() {
    this.props.fetchBookSeries(this.props.params.id);
  }


  componentDidUpdate(prevProps) {
    if (this.props.params.id !== prevProps.params.id)
    this.props.fetchBookSeries(this.props.params.id);
  }

  renderBooks() {
    const books = this.props.bookSeries.books;
    return books.map((book, i)=> {return <Book book={book} key={i}/>});
  }

  // onSet() {
  //   this.props.setModal(<UploadCSVModal upload={this.props.upload} id={this.props.params.id}/>)
  // }

  renderModal() {
    if (this.state.modal) {
      return(
        <UploadCSVModal  upload={this.props.upload} id={this.props.params.id} onClose={()=> this.setState({modal: false})}/>
        )
    }
    return null;
  }

  renderButton = () => {
    return(<button className="btn btn-sm add-details"onClick={()=>this.setState({modal: true})}>Add More Details With CSV</button>)
  }

  renderBookSeriesListItems() {
    const bookSeries = this.props.bookSeries || {};
    if (bookSeries != {}){
      return (<BookSeriesListItem bookSeries ={bookSeries} />)
    } else {
      return (null)
    }
              
  }

  render() {
    return(
      <section className="breathe">
          { this.renderModal() }
          { this.renderBookSeriesListItems()}
        { this.renderButton() }
      </section>
      )
  }
}

const mapStateToProps = state => ({
  bookSeries: state.bookSeries.item
});

export default connect(mapStateToProps, { fetchBookSeries })(BookSeriesShow);