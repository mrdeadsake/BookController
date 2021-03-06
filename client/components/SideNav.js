import React from 'react';
import Navigation from './Navigation';
import SideNavChildren from './SideNavChildren';

export default class SideNav extends React.Component {

  static propTypes = {
    appUrl: React.PropTypes.string,
    button: React.PropTypes.object,
    items: React.PropTypes.array.isRequired,
    renderCustomItems: React.PropTypes.func,
    selectedId: React.PropTypes.any,
    user: React.PropTypes.object,
  };

  constructor (props, context) {
    super(props, context);
    this.navigate = this.navigate.bind(this);
  }

  render () {
    return (
      <div className="nav">
        <ul>
          { this.renderItems() }
          { this.renderButton() }
        </ul>
      </div>
    );
  }

  renderButton () {
    if (this.props.button) {
      return (
        <li key={ `btn-${this.props.button.text}` } className="nav-list">
          <div className="nav-button">
            <button className="btn btn--secondary" onClick={ this.props.button.onClick } title={ this.props.button.text }>
              { `${this.props.button.text} ` }
              { this.props.button.icon ?
                  <span className={ `nav-icon glyphicon glyphicon-${this.props.button.icon}` }> </span>
                :
                  undefined
              }
            </button>
          </div>
        </li>
      );
    }
  }

  renderItems () {
    return this.props.items.map((item, i) => {
      return (
        <li key={ item.id || i } className={ this.classNameForItem(item) }>
          { item.children ? this.renderChildren(item) : this.renderChildlessItem(item) }
        </li>
      );
    });
  }

  renderChildren (item) {
    return (
      <SideNavChildren
        children={ item.children }
        itemText={ item.text }
        itemIcon={ item.icon }
        selectedId={ this.props.selectedId } />
    );
  }

  renderChildlessItem (item) {
    return (
      <div className="nav-div">
        <a onClick={ this.navigate.bind(this, item.url) } href={ item.url ? Navigation.buildPath(item.url) : null } title={ item.text }>
          { item.icon ?
            <span className={ `nav-icon__left glyphicon glyphicon-${ item.icon }`}></span>
          :
            undefined
          }
          <span className={'nav-text ' + (item.selectedId === item.id ? 'selected' : '')}>{ item.text }</span>
        </a>
      </div>
    );
  }

  classNameForItem (item) {
    const classNames = ['nav-list'];
    if (item.url === this.props.selectedId) {
      classNames.push('selected');
    }
    if (item.children) {
      classNames.push('nav-drop');
    }
    if (item.className) {
      classNames.push(item.className);
    }
    return classNames.join(' ');
  }

  navigate (url, evt) {
    evt.preventDefault();
    if (url) {
      Navigation.navigate(url);
    }
  }
}
