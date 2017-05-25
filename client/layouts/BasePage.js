import React from 'react';
import BookSideNav from '../components/BookSideNav';
export default class BasePage extends React.Component {

  render () {
    return (
      <div className = "base-page">
        <BookSideNav selected={window.location.pathname} />
        <main className="form-content">
          { this.props.children }
        </main>
      </div>
    );
  }
}

BasePage.propTypes = {
  children: React.PropTypes.node,
};