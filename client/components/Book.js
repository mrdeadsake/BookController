import { connect } from 'react-redux';
import { fetchBooks } from '../actions/bookActions';
import { fetchChapters } from '../actions/chapterActions';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import { chapterActions } from '../actions/chapterActions';

import React from 'react';
import NavDropdownSelect from '../components/NavDropdownSelect';
import WaitFor from './WaitFor';
import AddDetailModal from '../modals/AddDetailModal';
import _ from 'lodash';


class Book extends React.Component {

  constructor() {
    super();
    this.state = {
      characterObject: undefined,
      current_chapter: undefined,
      modal: false,
    }

  }

  static propTypes = {
    bookSeries: React.PropTypes.object,
  };

  componentDidMount() {
    if (this.props.bookSeries.characters && this.props.bookSeries.characters.length !== 0) {
      this.setState({characterObject: this.props.bookSeries.characters[0]})
    }
    this.props.fetchChapters(this.props.book.id);
    if (this.props.chapters && this.props.chapters.length !== 0) {
      this.setState({default_chapter: this.props.chapters[0]})
    }
  }

    componentDidUpdate(prevProps) {
    if (this.props.book.id !== prevProps.book.id) {
      this.props.fetchChapters(this.props.book.id);
    }
    if (this.props.chapters && this.props.chapters[0] !== prevProps.chapters[0]) {
      this.setState({default_chapter: this.props.chapters[0]})
    }
  }

  onCharSelect = (filter) => {
    this.setState({ characterObject: filter});
  }

  onChapterSelect = (chapter) => {
    this.setState({
      current_chapter: chapter
    })
  }

  renderModal() {
    if (this.state.modal) {
      return(
        <AddDetailModal book={this.props.book} chapters={this.props.chapters} onClose={()=> this.setState({modal: false})}/>
        )
    }
    return null;
  }

  renderButton = () => {
    return(<button className="btn btn-sm add-details" onClick={()=>this.setState({modal: true})}>Add Chapter</button>)
  }

  render() {
    let default_chapter = undefined;
    let current_chapter, current_chapter_name;

    const bookSeries = this.props.bookSeries;

    if (!!this.state && !!this.state.default_chapter) {
      default_chapter = this.state.default_chapter;

       current_chapter = !this.state.current_chapter && default_chapter !== undefined ? default_chapter : this.state.current_chapter;
       current_chapter_name = !this.state.current_chapter  ? default_chapter : this.state.current_chapter.name;
    }

    const chapters = this.props.chapters || [];
    const chapter = 0;

    const characters = bookSeries.characters;
    const details = bookSeries.details;
    const character = this.state && this.state.characterObject ? this.state.characterObject : {id: 0}
    return(
      <div className="book">
        { this.renderModal() }
        <div className="flex">
            <div className="full">
              {
                !!current_chapter
                 ? <NavDropdownSelect
                   label=""
                   onSelect={this.onChapterSelect}
                   options={ chapters }
                   textKey="name"
                   valueKey="id"
                   selectedValue={current_chapter.id}
                   selectedText={current_chapter.name}
                  />
                : null
              }
              <Chapter 
                chapters={chapters} 
                chapter={current_chapter} 
                onCharSelect={this.onCharSelect} 
                character={character} 
                allData={this.props.bookSeries}/>
            </div>
        </div>
        { this.renderButton() }
        </div>
      )
  }
}

const mapStateToProps = state => ({
  bookSeries: state.bookSeries.item,
  chapters: state.chapters.items,
});

export default connect(mapStateToProps, { fetchChapters })(Book);



