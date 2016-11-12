import Navigation from './Navigation';
import SideNav from './SideNav';
import { connect } from 'react-data-actions';
import {chapterActions } from '../actions/chapterActions';
import {bookSeriesBookActions} from '../actions/bookSeriesActions';
import React from 'react';
import _ from 'lodash';

class BookSideNav extends React.Component {


  static propTypes = {
    selected: React.PropTypes.string,
    chapters: React.PropTypes.object,
  };

  static connectedActions () {
    return {
      bookSeries: bookSeriesBookActions.indexAction(),
    };
  }

  constructor (props, context) {
    super(props, context);

    this.state = {
      items: [{
        icon: 'dashboard',
        id: Navigation.buildPath('/landing'),
        text: 'Overview',
        url: '/overview',
      }],
    };
  }

  componentWillReceiveProps(props) {
    this.setSeries(props.bookSeries.data);
  }

  setSeries(series) {
    if (series && series.length) {
      let menuItems = this.state.items.slice(0,1);
      menuItems.splice(1, 0, {
        id: 'book_series',
        text: 'Book Series',
        icon: 'bar-graph',
        children: this.createSeriesItemLinks(series)
      });
      menuItems.push({
        id: "about_me",
        text: "About Me",
        icon: "search",
        url: "/about"
      })
      this.setState({
        items: menuItems
      });
    }
  }

  createSeriesItemLinks(series) {
    return series.map((seriesItem) => {
      let link_name = seriesItem.name.replace(/\W/g, '_');
      var url = Navigation.buildPath(`/book_series/${seriesItem.id}`);
      return {id: seriesItem.id, url: url, text: seriesItem.name };
    });
  }

  render () {
    return (
      <SideNav items={ this.state.items } appUrl={ window.env.appUrl } selectedId={this.props.selected} />
    );
  }
}

export default connect(BookSideNav);
