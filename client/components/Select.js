import React from 'react';
import { Dropdown } from 'transcend-react';

export default class Select extends React.Component {
  static propTypes = {
    className: React.PropTypes.string,
    id: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    options: React.PropTypes.array.isRequired,
    required: React.PropTypes.bool,
    tabIndex: React.PropTypes.number,
    textKey: React.PropTypes.string,
    valueKey: React.PropTypes.string,
    defaultText: React.PropTypes.string,
  };

  static contextTypes = {
    getFormModelValue: React.PropTypes.func.isRequired,
    registerFormControl: React.PropTypes.func.isRequired,
    unregisterFormControl: React.PropTypes.func.isRequired,
  };

  constructor (props, context) {
    super(props, context);
    this.state = {};
  }

  componentDidMount () {
    this.context.registerFormControl(this);
  }

  componentWillUnmount () {
    this.context.unregisterFormControl(this);
  }

  onDropdownChange (value) {
    this.setState({
      value,
    }, () => {
      if (this.props.onChange) {
        this.props.onChange(value);
      }
    });
  }

  getModelValue () {
    return this.context.getFormModelValue(this.props.name);
  }

  getValue () {
    if (this.state.value === undefined) {
      return this.getModelValue();
    }
    return this.state.value;
  }

  getValidationError () {
    if (this.props.required && this.getValue() === undefined) {
      return 'You must select an option.';
    }
    return undefined;
  }

  render () {
    const defaultText = this.props.defaultText ? this.props.defaultText : 'Please Select an Option';
    return (
      <Dropdown
        className={ this.props.className }
        id={ this.props.id }
        onChange={ ::this.onDropdownChange }
        options={ this.props.options }
        tabIndex={ this.props.tabIndex }
        textKey={ this.props.textKey }
        value={ this.getValue() }
        valueKey={ this.props.valueKey }
        defaultText={ defaultText }
      />
    );
  }
}
