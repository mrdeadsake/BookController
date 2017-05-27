import { connect } from 'react-data-actions';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import { chapterActions } from '../actions/chapterActions';
import modalActions from '../actions/modalActions';

//import { bookActions, chapterActions } from '../actions/bookActions';
import React from 'react';
import NavDropdownSelect from '../components/NavDropdownSelect';
import WaitFor from './WaitFor';
import UploadCSVModal from '../modals/UploadCSVModal';

import _ from 'lodash';

class Book extends React.Component {

  constructor(props){
    super(props);
    this.state = {current_chapter: null};
    this.onCharSelect = ::this.onCharSelect;
    this.onChapterSelect = ::this.onChapterSelect;
    this.onSet = ::this.onSet;
  }
  static propTypes = {
    item: React.PropTypes.object
  };

  static connectedActions (props) {
    return {
      index: chapterActions.indexAction({id: props.book.id}),
      invalidateChapterList: chapterActions.invalidateIndexAction({id: props.book.id}),
      setModal: modalActions.setAction(),
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps != this.props) {
      if (nextProps.index.data != undefined) {
        const default_chapter = nextProps.index.data[0]
        this.setState({current_chapter: default_chapter})
      }
      if (nextProps.item.characters && nextProps.item.characters.length != 0) {
        this.setState({characterObject: nextProps.item.characters[0]})
      } else {
        this.setState({characterObject: undefined})
      }
    }
  }

  componentDidMount() {
    if (this.props.item.characters && this.props.item.characters.length != 0) {
      this.setState({characterObject: this.props.item.characters[0]})
    }
  }

  componentWillUnmount() {
  }

  onCharSelect(filter) {
    this.setState({ characterObject: filter});
  }

  onChapterSelect(chapter) {
    this.setState({
      current_chapter: chapter
    })
  }

  onSet() {
    this.props.setModal(<UploadCSVModal />)
  }

  renderButton() {
    return(<button onClick={this.onSet}>Add Chapter</button>)
  }

  render() {
    let default_chapter = undefined;
    if (this.props.index.data !== undefined) {
      default_chapter = this.props.index.data[0];
    }
    const bookSeries = this.props.item;
    const books = bookSeries.books;
    const current_chapter = this.state.current_chapter === null && default_chapter !== undefined ? default_chapter : this.state.current_chapter;
    const current_chapter_name = this.state.current_chapter === null ? default_chapter : this.state.current_chapter.name;
    const chapters = this.props.index.data || [];
    const chapter = 0;
    const characters = bookSeries.characters;
    const details = bookSeries.details;
    const character = this.state.characterObject ? this.state.characterObject : {id: 0}
    return(
      <div className="book">
        <div className="flex">
          <WaitFor data={this.props.index}>
            <div className="full">
              {
                chapters.length > 0
                 ? <NavDropdownSelect
                   label=""
                   onSelect={this.onChapterSelect}
                   options={ chapters }
                   textKey="name"
                   valueKey="id"
                   selectedValue={current_chapter.id}
                   selectedText={current_chapter.name}
                  />
                : this.renderButton()
              }
              <Chapter 
                chapters={chapters} 
                chapter={current_chapter} 
                onCharSelect={this.onCharSelect} 
                character={character} 
                allData={this.props.item}/>
            </div>
          </WaitFor>
        </div>
      </div>
      )
  }
}

export default connect(Book)



