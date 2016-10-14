import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';

class Chapter extends React.Component {
  static propTypes = {
    chapters: React.PropTypes.array,
    chapter: React.PropTypes.number,
  };

  render() {
    const chapter = this.props.chapter;
    const chapters = this.props.chapters;
    let name = '';
    if (chapters.length != 0){
      name = chapters[chapter-1].name;
    }
    return(<h1 className="chapter">{name}</h1>)
  }
}

export default connect(Chapter)