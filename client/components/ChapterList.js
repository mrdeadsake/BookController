import Chapter from './Chapter';
import React from 'react';
import _ from 'lodash';

export default class ChapterList extends React.Component {
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