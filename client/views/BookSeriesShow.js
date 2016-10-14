import {chapterActions } from '../actions/chapterActions'
import {characterDetailsActions } from '../actions/characterDetailsActions'
import { bookActions } from '../actions/bookActions'
import { WaitFor } from 'transcend-react';
import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';
import ChapterList from '../components/ChapterList'

class BookSeriesShow extends React.Component {

  static connectedActions () {
    return {
      chapters: chapterActions.indexAction(),
    }
  }
  render() {
    const chapters = this.props.chapters.data || {};
    return(
      <section className="breathe">
        <WaitFor data={this.props.chapters}>
          <ChapterList chapters={chapters}/>
        </WaitFor>
      </section>
      )
  }
}

export default connect(BookSeriesShow)