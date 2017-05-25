import React from 'react';

class Input extends React.Component {

  static propTypes = {
    min: React.PropTypes.number.isRequired,
    maxText: React.PropTypes.string,
    minText: React.PropTypes.string,
    onChange: React.PropTypes.func,
    step: React.PropTypes.number,
    value: React.PropTypes.number,
  };

  static defaultProps = {
    step: 0,
    min: 0,
  };

  constructor (...args) {
    super(...args);
    this.onInputChange = ::this.onInputChange;
  }

  onChange (value) {
    let newValue = value * 1;
    if (newValue > this.props.max) {
      newValue = this.props.max;
    } else if (newValue < this.props.min) {
      newValue = this.props.min;
    }
    this.props.onChange(newValue);
  }

  onInputChange (evt) {
    this.onChange(evt.target.value);
  }

  render () {
    return (
      <div className="input">
          <input
              ref={ n => this.sliderInput = n }
              type="number"
              min={ this.props.min }
              max={ this.props.max }
              step={ this.props.step }
              className="input__manual"
              value={ this.props.value }
              onChange={ this.onInputChange }
            />
      </div>
    );
  }
}
export default Input;