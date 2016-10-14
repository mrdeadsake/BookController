import { connect } from 'react-data-actions';
import Chapter from './Chapter';
import React from 'react';
import _ from 'lodash';

class ChapterList extends React.Component {
  static propTypes = {
    chapters: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  };

  renderChapters() {
    return this.props.chapters.map((chapter)=> {
      return <Chapter chapter={chapter} key={chapter.id}></Chapter>
    })
  }
  render() {
    return(
      <div>{this.renderChapters()}</div>
      )
  }
}

export default connect(ChapterList)