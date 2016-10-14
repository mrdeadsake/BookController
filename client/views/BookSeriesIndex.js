import {chapterActions } from '../actions/chapterActions';
import {characterDetailsActions } from '../actions/characterDetailsActions';
import BookSeriesList from '../components/BookSeriesList';
import BookSeriesListItem from '../components/BookSeriesListItem';
import { bookActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import { WaitFor } from 'transcend-react';
import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';
import ChapterList from '../components/ChapterList'

class BookSeriesIndex extends React.Component {

  static connectedActions () {
    return {
      series: bookSeriesActions.indexAction(),
      chapters: chapterActions.indexAction(),
    }
  }
  render() {
    const books = this.props.series.data || [{}];
    const chapters = this.props.chapters.data || [{}];
    const chapter = {};
    return(
      <section className="breathe">
        <WaitFor data={this.props.series}> 
          <div className="BookSeriesIndex">
            <BookSeriesList bookSeries={books}/> 
          </div>
        </WaitFor>
      </section>
      )
    }
}

export default connect(BookSeriesIndex)