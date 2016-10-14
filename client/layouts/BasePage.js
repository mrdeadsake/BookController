import React from 'react';
import BookSideNav from '../components/BookSideNav';
export default class BasePage extends React.Component {

  render () {
    return (
      <div className = "base-page">
        <div className="container">
          <div className="container__content">
            <BookSideNav selected={window.location.pathname} />
            <main className="form-content">
              { this.props.children }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

BasePage.propTypes = {
  children: React.PropTypes.any,
};