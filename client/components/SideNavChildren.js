import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

export default class SideNavChildren extends React.Component {

  static propTypes = {
    showChildren: React.PropTypes.bool,
    children: React.PropTypes.array.isRequired,
    itemText: React.PropTypes.string.isRequired,
    selectedId: React.PropTypes.any,
    onHasSelectedChild: React.PropTypes.func,
    itemIcon: React.PropTypes.string,
  };

  constructor (props, context) {
    super(props, context);
    this.navigate = ::this.navigate;
    this.onDropdownToggleClick = ::this.onDropdownToggleClick;
    this.onHasSelectedChild = ::this.onHasSelectedChild;

    this.state = {
      showChildren: true,
    };
  }

  componentDidMount () {
    if (this.props.selectedId && this.refs[this.props.selectedId]) {
      const element = ReactDOM.findDOMNode(this.refs[this.props.selectedId]);
      const itemContainer = ReactDOM.findDOMNode(this.refs.itemContainer);
      const scrollTop = _.min([element.offsetTop, itemContainer.scrollHeight]);
      itemContainer.scrollTop = scrollTop;
    }
    if (this.state.showChildren && this.props.onHasSelectedChild) {
      this.props.onHasSelectedChild();
    }
  }

  componentWillReceiveProps (props) {
    if (this.shouldShowChildrenFromProps(props) && !this.state.showChildren) {
      this.setState({
        showChildren: true,
      }, () => {
        if (this.props.onHasSelectedChild) {
          // haye guys. Don't be mad at me for dis. <3 future devs that has to work with this. plz respect me.
          this.props.onHasSelectedChild();
        }
      });
    }
  }

  onHasSelectedChild () {
    this.setState({
      showChildren: true,
    }, () => {
      if (this.props.onHasSelectedChild) {
        this.props.onHasSelectedChild();
      }
    });
  }

  onDropdownToggleClick (evt) {
    const anchor = this.closestAnchorToElement(evt.target);
    if (!anchor) { // if it wasn't a link they clicked on
      evt.preventDefault();
      evt.stopPropagation();
      this.setState({
        showChildren: !this.state.showChildren,
      });
    }
  }

  render () {
    let dropclass;
    if (this.state.showChildren === undefined) {
      dropclass = 'no-show';
    } else if (this.state.showChildren) {
      dropclass = 'slide-in';
    } else {
      dropclass = 'slide-out';
    }
    return (
      <div className="nav-list-container" onClick={ this.onDropdownToggleClick }>
        <div className="nav-list-dropdown">
          { this.renderItemIcon() }
          <span className="nav-text">{ this.props.itemText }</span>
          <span className={ this.classNameForArrow() }></span>
        </div>
        <ul ref="itemContainer" className={`nav-drop__items ${ dropclass }`}>
          { this.props.children.map((child, i) => {
            return (
              <li ref={ child.id || i } className={ this.classNameForChild(child) } key={ child.id || child.url }>
                { child.children ? this.renderSideNavChildren(child) : this.renderChildlessItem(child) }
              </li>
              );
          })
          }
        </ul>
      </div>
      );
  }

  renderItemIcon () {
    if (this.props.itemIcon) {
      return <span className= { `nav-icon__left glyphicon glyphicon-${ this.props.itemIcon }` }> </span>;
    }
  }

  renderSideNavChildren (item) {
    return (
      <SideNavChildren
        children={ item.children }
        itemText={ item.text }
        itemIcon={ item.icon }
        selectedId={ this.props.selectedId }
        onHasSelectedChild={ this.onHasSelectedChild }
      />
    );
  }

  renderChildlessItem (child) {
    return <a onClick={ this.navigate.bind(this, child.url) } href={ Navigation.buildPath(child.url) }>{ child.text }</a>;
  }

  classNameForArrow () {
    const classNames = ['nav-icon__right', 'icon', 'icon--sm'];
    if (this.state.showChildren) {
      classNames.push('glyphicon glyphicon-menu-up');
    } else {
      classNames.push('glyphicon glyphicon-menu-down');
    }
    return classNames.join(' ');
  }

  classNameForChild (child) {
    const classNames = [];
    if (this.props.selectedId === child.url) {
      classNames.push('selected');
    }
    if (child.children) {
      classNames.push('nav-drop__item');
    }
    if (child.className) {
      classNames.push(child.className);
    }
    return classNames.join(' ');
  }

  navigate (url, evt) {
    evt.preventDefault();
    if (url) {
      Navigation.navigate(url);
    }
  }

  closestAnchorToElement (element) {
    const $this = ReactDOM.findDOMNode(this);
    let el = element;
    while (el && el !== $this) {
      if (el.tagName === 'A') {
        return el;
      }
      el = el.parentNode;
    }
  }

  shouldShowChildrenFromProps (props) {
    if (props.selectedId && props.children && props.children.length) {
      const contains = _.find(props.children, {
        id: props.selectedId,
      });
      return !!contains;
    }
    return false;
  }
}
