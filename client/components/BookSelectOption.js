import React from 'react';

export default class BookSelectOption extends React.Component {
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
    const icon = this.props.icon || this.props.option.icon;
    let iconClassName = '';
    if (icon) {
      iconClassName = 'select__options__option--has-icon';
    }
    return (
      <div className={ `select__options__option ${iconClassName}` } onClick={ this.onClick }>
        { this.props.option[this.props.textKey] }
        { this.renderIcon() }
      </div>
    );
  }

  renderIcon () {
    const icon = this.props.icon || this.props.option.icon;
    if (icon) {
      return <i className={ `icon icon--${icon} select__options__option__icon`} onClick={ ::this.onIconClick }></i>;
    }
  }
}
