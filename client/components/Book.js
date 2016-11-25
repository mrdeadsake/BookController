import { connect } from 'react-data-actions';
import Character from '../components/Character';
import Chapter from '../components/Chapter';
import { chapterActions } from '../actions/chapterActions';
//import { bookActions, chapterActions } from '../actions/bookActions';
import React from 'react';
import NavDropdownSelect from '../components/NavDropdownSelect';
import WaitFor from './WaitFor';
import _ from 'lodash';

class Book extends React.Component {

  constructor(props){
    super(props);
    this.state = {current_chapter: null};
    this.onCharSelect = ::this.onCharSelect;
    this.onChapterSelect = ::this.onChapterSelect;
  }
  static propTypes = {
    item: React.PropTypes.object
  };

  static connectedActions (props) {
    return {
      index: chapterActions.indexAction({id: props.book.id}),
      //show: chapterActions.showAction({id:props.item.books[0].id})
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.index.data != undefined) {
      const default_chapter = nextProps.index.data[0]
      this.setState({current_chapter: default_chapter})
    }
  }

  componentDidMount() {
    if (this.props.item.characters && this.props.item.characters.length != 0) {
      this.setState({characterObject: this.props.item.characters[0]})
    }
  }

  onCharSelect(filter) {
    this.setState({ characterObject: filter});
  }

  onChapterSelect(chapter) {
    this.setState({
      current_chapter: chapter
    })
  }

  render() {
    const bookSeries = this.props.item;
    const books = bookSeries.books;
    const chapters = this.props.index.data || [];
    const characters = bookSeries.characters;
    const details = bookSeries.details;

    return(
      <div className="book">
        <div className="row">
          <WaitFor data={this.props.index}>
            <Chapter chapters={chapters} chapter={this.state.current_chapter} onChapterSelect={this.onChapterSelect} allData={this.props.item}/>
          </WaitFor>
        </div>
      </div>
      )
  }
}

export default connect(Book)



