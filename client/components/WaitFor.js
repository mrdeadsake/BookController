import React from 'react';
import WaitIndicator from './WaitIndicator';
import _ from 'lodash';

class WaitFor extends React.Component {

  static propTypes = {
    data: React.PropTypes.any.isRequired,
    ignoreWarnings: React.PropTypes.bool,
    waitClassName: React.PropTypes.string,
    className: React.PropTypes.string,
    errorMessage: React.PropTypes.string,
    children: React.PropTypes.node,
  };

  render () {
    if (this.isFetching()) {
      if (this.hasCachedData()) { // its entirely possible its fetching but cached data is there
        return this.renderChildren();
      } else {
        return <WaitIndicator className={ this.props.waitClassName } />;
      }
    } else if (this.hasError()) {
      return (
        <div className="error wait-for__error">
          <div className="row row--spaced">
            <div className="row__cell row__cell--fixed">
              <span className="icon icon--error"></span>
            </div>
            { this.renderErrorMessage() }
          </div>
        </div>
      );
    }
    // its all good to render
    return this.renderChildren();
  }

  renderErrorMessage () {
    let data = this.props.data;
    if (_.isArray(data)) {
      data = _.find(data, (datum) => datum.hasError);
    }
    let message = this.props.errorMessage;
    if (!message) {
      if (data && (data.error || data.errorMessage)) {
        message = data.error || data.errorMessage;
      } else if (data && data.statusText) {
        message = data.statusText;
      }
    }
    return (
      <div className="row__cell">{ message }</div>
    );
  }

  renderChildren () {
    if (_.isArray(this.props.children)) {
      if (!this.props.ignoreWarnings) {
        /* eslint-disable no-console */
        console.warn('WaitFor received an array, that means we are going to wrap it in a div');
      }
      return (
        <div className={ `${this.props.className} wait-for-wrapper` }>
          { this.props.children }
        </div>
      );
    } else {
      return this.props.children;
    }
  }

  isFetching () {
    let data = this.props.data;
    if (!_.isArray(data)) {
      data = [data];
    }
    return _.findIndex(data, (datum) => datum.isFetching) !== -1;
  }

  hasError () {
    let data = this.props.data;
    if (!_.isArray(data)) {
      data = [data];
    }
    return _.findIndex(data, (datum) => datum.hasError) !== -1;
  }

  hasCachedData () {
    let data = this.props.data;
    if (!_.isArray(data)) {
      data = [data];
    }
    return _.findIndex(data, (datum) => !!datum.data) !== -1;
  }
}

export default WaitFor;