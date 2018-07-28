import { connect } from 'react-data-actions';
import BookSeriesListItem  from './BookSeriesListItem';
import React from 'react';
import _ from 'lodash';

class BookSeriesList extends React.Component {

  static propTypes = {
      bookSeries: React.PropTypes.arrayOf(React.PropTypes.object),
    };

  renderBookSeriesListItems() {
    const data = this.props.bookSeries;
    return data.map((item, i)=> {return <BookSeriesListItem item={item} key={i}/>});
  }

  render() {
    //let items = this.props.bookSeries.map((item) => {<Boo>})
    let item = <BookSeriesListItem item={this.props.bookSeries[0]}/>;

    return(
      <section>
          <div className="method">
            { this.renderBookSeriesListItems() }
          </div>
      </section>
      )
  }
}

export default BookSeriesList