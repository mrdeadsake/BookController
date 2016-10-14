import {chapterActions } from '../actions/chapterActions'
import { WaitFor } from 'transcend-react';
import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';
import ChapterList from '../components/ChapterList';
import Chapter from '../components/Chapter';


class Landing extends React.Component {

  static connectedActions () {
    return {
      chapters: chapterActions.indexAction(),
    }
  }
  render() {
    console.log(this.props.chapters)
    const chapters = this.props.chapters.data || [{}];
    const chapter = {};
    return(
      <section className="breathe">
        <WaitFor data={this.props.chapters}>
        <div>
          <Chapter chapter={chapter} />
          <Chapter chapter={chapters[0]}/>
        </div>
        </WaitFor>
      </section>
      )
  }
}

export default connect(Landing)