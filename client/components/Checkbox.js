import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class Checkbox extends Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    label: PropTypes.any,
    value: PropTypes.string,
  };

  constructor (props, ...args) {
    super(props, ...args);
    this.uniqueId = props.id || _.uniqueId('checkbox');
  }

  render () {
    const { value, className, onClick, onChange, checked, defaultChecked, disabled, name, label } = this.props;
    return (
      <div className={ `checkbox ${className || ''}` }>
        <input
          type="checkbox"
          id={ this.uniqueId }
          name={ name }
          value={ value }
          onClick={ onClick }
          onChange={ onChange }
          ref={ n => this.input = n }
          defaultChecked={ defaultChecked }
          checked={ checked }
          disabled={ disabled }
        />
        <label htmlFor={ this.uniqueId }>
          { label }
        </label>
      </div>
    );
  }
}
