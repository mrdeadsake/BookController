import React from 'react';
import NavDropdownSelectOption from './NavDropdownSelectOption';

export default class NavDropdownSelect extends React.Component {

  static propTypes = {
    label: React.PropTypes.string.isRequired,
    options: React.PropTypes.array.isRequired,
    selectedText: React.PropTypes.string,
    selectedValue: React.PropTypes.any,
    isSearchable: React.PropTypes.bool,
    newButton: React.PropTypes.object,
    alignRight: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    onIconClick: React.PropTypes.func,
    valueKey: React.PropTypes.string,
    textKey: React.PropTypes.string,
    icon: React.PropTypes.string,
  };

  constructor () {
    super(...arguments);
    const { defaultValue, defaultText } = this.getDefaultSelection(this.props);
    this.state = {
      selectedValue: defaultValue,
      selectedText: defaultText,
      showOptions: false,
      visibleOptions: this.props.options.slice(0),
    };
  }

  static defaultProps = {
    valueKey: 'value',
    textKey: 'text',
    alignRight: false,
    isSearchable: false,
  };

  componentWillReceiveProps (nextProps) {
    const { defaultValue, defaultText } = this.getDefaultSelection(nextProps);
    this.setState({
      selectedValue: defaultValue,
      selectedText: defaultText,
      visibleOptions: nextProps.options.slice(0),
    });
  }

  componentDidUpdate () {
    if (this.state.showOptions) {
      if (this.refs.searchText) {
        this.refs.searchText.focus();
      }
    }
  }

  componentWillUnmount () {
    if (this.mouseLeaveTimeout) {
      window.clearTimeout(this.mouseLeaveTimeout);
      delete this.mouseLeaveTimeout;
    }
  }

  onDropDownClick () {
    this.setState({
      showOptions: !this.state.showOptions,
    });
  }

  onIconClick (selectedOption) {
    const callback = this.props.onIconClick || selectedOption.onIconClick;
    if (callback) {
      this.setState({
        showOptions: false,
      }, () => {
        callback(selectedOption);
      });
    }
  }

  onOptionClick (selectedOption) {
    // if a javascript callback was provided for this selectedOption, do it now!
    if (selectedOption.callback) {
      selectedOption.callback(selectedOption[this.props.valueKey]);
    }
    this.setState({
      showOptions: false,
      selectedValue: selectedOption[this.props.valueKey],
      selectedText: selectedOption[this.props.textKey],
    });
    if (this.props.onSelect) {
      this.props.onSelect(selectedOption);
    }
  }

  onMouseLeave () {
    this.mouseLeaveTimeout = window.setTimeout(() => {
      this.setState({
        showOptions: false,
      });
    }, 500);
  }

  onMouseEnter () {
    if (this.mouseLeaveTimeout) {
      window.clearTimeout(this.mouseLeaveTimeout);
      delete this.mouseLeaveTimeout;
    }
  }

  onMouseScroll (e) {
    const scrollableElement = this.refs.options_list;
    if (scrollableElement.scrollTop === 0 && e.deltaY < 0) {
      e.preventDefault();
      e.stopPropagation();
    } else if (scrollableElement.scrollTop >= (scrollableElement.scrollHeight - scrollableElement.clientHeight) && e.deltaY > 0) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  onSearchKeyUp () {
    const prefix = this.refs.searchText.value.toLowerCase();
    const visibleOptions = this.props.options.filter((option) => {
      return (option[this.props.textKey].toLowerCase().indexOf(prefix) !== -1);
    });

    this.setState({
      visibleOptions: visibleOptions,
    });
  }

  onNewButtonClick (evt) {
    evt.preventDefault();
    this.setState({
      showOptions: false,
    }, () => {
      if (this.props.newButton.callback) {
        this.props.newButton.callback();
      }
    });
  }

  getDefaultSelection (props) {
    let defaultValue = '';
    let defaultText = '';

    if (props.selectedText) {
      defaultValue = props.selectedValue;
      defaultText = props.selectedText;
    } else if (props.options.length) {
      defaultValue = props.options[0][this.props.valueKey];
      defaultText = props.options[0][this.props.textKey];
    }
    return { defaultValue, defaultText };
  }

  render () {
    return (
      <div className="select select--nav" onMouseLeave={ ::this.onMouseLeave } onMouseEnter={ ::this.onMouseEnter }>
        <div className="select__content" onClick={ ::this.onDropDownClick }>
          <div className="select__label">{this.props.label}</div>
          <div className="select__selected-text">
            { this.state.selectedText } <span className="icon icon--sm icon--dropdown-arrow"></span>
          </div>
        </div>
        { this.renderOptions() }
      </div>
    );
  }

  renderOptions () {
    if (this.state.showOptions) {
      const options = this.state.visibleOptions.map((option, i) => {
        return <NavDropdownSelectOption textKey={ this.props.textKey } option={ option } key={ i } onClick={ ::this.onOptionClick } icon={ this.props.icon } onIconClick={ ::this.onIconClick } />;
      });
      return (
        <div className={'column select__options-panel' + (this.props.alignRight ? ' select__options-panel--right' : '')}>
          { this.renderSearch() }
          <div className="column__cell select__options-panel__options" ref="options_list" onWheel={ ::this.onMouseScroll }>
            { options }
          </div>
          { this.renderButton() }
        </div>
      );
    }
  }

  renderSearch () {
    if (this.props.isSearchable) {
      return (
        <div className="column__cell column__cell--fixed select__options__search">
          <input type="text" ref="searchText" placeholder="Search filters" onKeyUp={ ::this.onSearchKeyUp } />
        </div>
      );
    }
  }

  renderButton () {
    if (this.props.newButton) {
      return (
        <div className="column__cell column__cell--fixed select__options__button">
          <button className="btn btn--sm btn--add full-width" onClick={ ::this.onNewButtonClick }>
            { this.props.newButton.text } <span className="icon icon--add"></span>
          </button>
        </div>
      );
    }
  }
}
