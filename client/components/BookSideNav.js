import Navigation from './Navigation';
import SideNav from './SideNav';
import { connect } from 'react-data-actions';
import {chapterActions } from '../actions/chapterActions';
import {bookSeriesActions} from '../actions/bookSeriesActions';
import React from 'react';
import _ from 'lodash';

class BookSideNav extends React.Component {


  static propTypes = {
    selected: React.PropTypes.string,
    chapters: React.PropTypes.object,
  };

  static connectedActions () {
    return {
      bookSeries: bookSeriesActions.indexAction(),
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
    this.setPortfolios(props.bookSeries.data);
  }

  setPortfolios(portfolios) {
    if (portfolios && portfolios.length) {
      let menuItems = this.state.items.slice(0,1);
      menuItems.splice(1, 0, {
        id: 'book_series',
        text: 'Book Series',
        icon: 'bar-graph',
        children: this.createPortfolioLinks(portfolios)
      });
      this.setState({
        items: menuItems
      });
    }
  }

  createPortfolioLinks(portfolios) {
    return portfolios.map((portfolio) => {
      let link_name = portfolio.name.replace(/\W/g, '_');
      var url = Navigation.buildPath(`/book_series/${portfolio.id}`);
      return {id: portfolio.id, url: url, text: portfolio.name };
    });
  }

  render () {
    return (
      <SideNav items={ this.state.items } appUrl={ window.env.appUrl } selectedId={this.props.selected} />
    );
  }
}

export default connect(BookSideNav);
