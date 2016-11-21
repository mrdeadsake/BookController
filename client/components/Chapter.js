import { connect } from 'react-data-actions';
import React from 'react';
import NavDropdownSelect from './NavDropdownSelect';

class Chapter extends React.Component {
  
  constructor(props){
    super(props);
    this.onCharSelect = ::this.onCharSelect;
  }

  static propTypes = {
    onChapterSelect: React.PropTypes.func,
    chapters: React.PropTypes.array,
    chapter: React.PropTypes.object,
  };

  onCharSelect(filter) {
    this.setState({ characterObject: filter});
  }

  render() {
    let chapter = this.props.chapter;
    const chapters = this.props.chapters;
    if (chapter == null ){
      chapter = chapters[0];
    }
    return(<NavDropdownSelect
             label=""
             onSelect={this.props.onChapterSelect}
             options={ chapters }
             textKey="name"
             valueKey="id"
             selectedValue={chapter.id}
             selectedText={chapter.name}
           />)
  }
}

export default connect(Chapter)