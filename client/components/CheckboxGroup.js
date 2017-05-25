import _ from 'lodash';
import React from 'react';
import Checkbox from './Checkbox';

class CheckboxGroup extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired,
    onChange: React.PropTypes.func,
    layoutType: React.PropTypes.string,
  };

  constructor (props, context) {
    super(props, context);
    this.state = {
      items: props.items,
    };
    this.onCheckboxChange = ::this.onCheckboxChange;
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      items: nextProps.items,
    });
  }

  onCheckboxChange (event) {
    const index = _.findIndex(this.state.items, (option) => {
      return option.value === event.target.value;
    });

    if (index === -1) {
      return;
    }

    const option = this.state.items[index];
    option.checked = event.target.checked;

    const items = this.state.items;
    items[index] = option;

    this.setState({
      items,
    });

    this.props.onChange(items);
  }

  render () {
    const extraClassName = this.props.layoutType === 'inline' ? 'checkbox-group--inline' : '';
    return (
      <div className={ `checkbox-group ${extraClassName}` }>
        {this.renderCheckboxes()}
      </div>
    );
  }

  renderCheckboxes () {
    return this.props.items.map((item, i) => {
      const id = `chck_${this.props.name}_${i}`;
      let text = item;
      let value = item;
      let checked = true;

      if (typeof item === 'object') {
        if (item.text) {
          text = item.text;
          if (item.value) {
            value = item.value;
          } else {
            value = text;
          }
        }
        if (item.checked !== true) {
          checked = false;
        }
      }

      return (
        <Checkbox
          id={ id }
          key={ id }
          value={ value }
          checked={ checked }
          onChange={ this.onCheckboxChange }
          label={ text }
        />);
    });
  }
}

export default CheckboxGroup;
