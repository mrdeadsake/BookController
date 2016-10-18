import React from 'react';

class WaitIndicator extends React.Component {
  render () {
    var className = `wait-indicator${(this.props.centered ? ' wait-indicator--centered' : '')} ${this.props.className}`;
    return (
      <div className={className}>
        <div className="bubble-1"></div>
        <div className="bubble-2"></div>
        <div className="bubble-3"></div>
      </div>
    );
  }
}

WaitIndicator.defaultProps = {
  centered: true,
  className:''
};

WaitIndicator.propTypes = {
  centered: React.PropTypes.bool,
  className: React.PropTypes.string
};

export default WaitIndicator;