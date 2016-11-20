import { connect } from 'react-data-actions';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import React from 'react';
import NavDropdownSelect from '../components/NavDropdownSelect';
import _ from 'lodash';

class Book extends React.Component {

  constructor(props){
    super(props);
    this.state = {current_chapter: 1}
  }
  static propTypes = {
    book: React.PropTypes.object,
    item: React.PropTypes.object
  };

  componentDidMount() {
    if (this.props.item.characters && this.props.item.characters.length != 0) {
      this.setState({characterObject: this.props.item.characters[0]})
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
    console.log(this.props)
    return(
      <div className="book">

      </div>
      )
  }
}

export default connect(Book)


          // <div className="row">
          //   <Chapter chapters={chapters} chapter={this.state.current_chapter}/>
          // </div>
          // <NavDropdownSelect
          //   label=""
          //   onSelect={this.onCharSelect}
          //   options={ characters }
          //   textKey="name"
          //   valueKey="id"
          //   selectedText={this.state.characterObject.name}
          // />
          // <Character character={this.state.characterObject} details={details} chapters={chapters} chapter={this.state.current_chapter}/>



