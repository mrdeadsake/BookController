import React from 'react';
import SideUserDropdown from './SideUserDropdown';
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
      <div className="masthead">
        { this.renderUser() }
        <ul>
          { this.renderItems() }
          { this.renderButton() }
        </ul>
      </div>
    );
  }

  renderUser () {
    if (this.props.user) {
      return <SideUserDropdown user={ this.props.user } appUrl={ this.props.appUrl }/>;
    }
  }

  renderButton () {
    if (this.props.button) {
      return (
        <li key={ `btn-${this.props.button.text}` } className="container__content__side-nav__item">
          <div className="container__content__side-nav__item__drop__container">
            <button className="btn btn--secondary" onClick={ this.props.button.onClick } title={ this.props.button.text }>
              { `${this.props.button.text} ` }
              { this.props.button.icon ?
                  <span className={ `icon icon--${this.props.button.icon}` }> </span>
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
      <div className="container__content__side-nav__item__drop__container">
        <a onClick={ this.navigate.bind(this, item.url) } href={ item.url ? Navigation.buildPath(item.url) : null } title={ item.text }>
          { item.icon ?
            <span className={ `icon icon--${ item.icon }`}></span>
          :
            undefined
          }
          <span className={'container__content__side-nav__item__text ' + (item.selectedId === item.id ? 'selected' : '')}>{ item.text }</span>
        </a>
      </div>
    );
  }

  classNameForItem (item) {
    const classNames = ['container__content__side-nav__item'];
    if (item.id === this.props.selectedId) {
      classNames.push('selected');
    }
    if (item.children) {
      classNames.push('container__content__side-nav__item__drop');
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
