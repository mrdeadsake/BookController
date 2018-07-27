import BookSeriesList from '../components/BookSeriesList';
import BookSeriesListItem from '../components/BookSeriesListItem';
import WaitFor from '../components/WaitFor';
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