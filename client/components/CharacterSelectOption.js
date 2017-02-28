import React from 'react';

export default class CharacterSelectOption extends React.Component {
  static propTypes = {
    onClick: React.PropTypes.func.isRequired,
    onIconClick: React.PropTypes.func,
    textKey: React.PropTypes.string.isRequired,
    option: React.PropTypes.any.isRequired,
    icon: React.PropTypes.string,
  };

  constructor (props, context) {
    super(props, context);
    this.onClick = this.onClick.bind(this);
  }

  onClick () {
    if (this.props.onClick) {
      this.props.onClick(this.props.option);
    }
  }

  onIconClick (evt) {
    if (this.props.onIconClick) {
      evt.preventDefault();
      evt.stopPropagation();
      this.props.onIconClick(this.props.option);
    }
  }

  render () {
    //const icon = this.props.icon || this.props.option.icon;
    const isSelected = this.props.selected;
    let selected = ''
    if (isSelected) {
      selected = 'selected';
    }
    return (
      <div className={ `bookselect__options__option ${selected}` } onClick={ this.onClick }>
        { this.props.option[this.props.textKey] }

      </div>
    );
  }

  renderIcon () {
    const icon = this.props.icon || this.props.option.icon;
    if (icon) {
      return <i className={ `icon icon--${icon} bookselect__options__option__icon`} onClick={ ::this.onIconClick }></i>;
    }
  }
}
