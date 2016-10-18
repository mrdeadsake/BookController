import {chapterActions } from '../actions/chapterActions';
import {characterDetailsActions } from '../actions/characterDetailsActions';
import BookSeriesList from '../components/BookSeriesList';
import BookSeriesListItem from '../components/BookSeriesListItem';
import { bookActions } from '../actions/bookActions';
import { bookSeriesActions } from '../actions/bookSeriesActions';
import WaitFor from '../components/WaitFor';
import { connect } from 'react-data-actions';
import React from 'react';
import _ from 'lodash';
import ChapterList from '../components/ChapterList'

class BookSeriesIndex extends React.Component {

  static connectedActions () {
    return {
      series: bookSeriesActions.indexAction(),
    }
  }
  render() {
    const books = this.props.series.data || [{}];
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