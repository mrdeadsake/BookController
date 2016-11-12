import React from 'react';
import Navigation from './Navigation';

class SideUserDropdown extends React.Component {
  constructor (props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
    this.state = { showUserItems: undefined };
  }

  handleClick (event) {
    this.setState({
      showUserItems: !!!this.state.showUserItems
    });
  }

  render () {
    return (
      <div>
        <div className="row row--spaced container__content__side-user-dropdown" onClick={ this.handleClick }>
          <div className="row__cell row__cell--fixed">
            <img className="container__content__side-user-dropdown__image"
                  src={ this.props.user.avatar }/>
          </div>
          <div className="row__cell row__cell--vertical-center">
            { this.props.user.username }
            <span className={`icon icon--sm ${ this.state.showUserItems ? 'icon--dropdown-arrow-up' : 'icon--dropdown-arrow' }` }></span>
          </div>
        </div>
          <SideUserDropItems appUrl={ this.props.appUrl } showUserItems={ this.state.showUserItems }/>
      </div>
      );
  }
}

SideUserDropdown.propTypes = {
  user: React.PropTypes.object,
  appUrl: React.PropTypes.string.isRequired
};

class SideUserDropItems extends React.Component {
  render () {
    var dropclass;
    if (this.props.showUserItems === undefined) {
      dropclass = 'no-show';
    } else if (this.props.showUserItems) {
      dropclass = 'slide-in';
    } else {
      dropclass = 'slide-out';
    }
    return (
      <ul className={`container__content__side-user-list ${ dropclass }`}>
        <li>
          <a href={ `${ this.props.appUrl }/client/profile/changepassword` }>
            <span className="icon icon--sm icon--password"> </span>
            Change Password
          </a>
        </li>
        <li>
          <a href={ Navigation.buildPath('/social_profiles') }>
            <span className="icon icon--sm icon--share"> </span>
            Social Profiles
          </a>
        </li>
        <li>
          <a target="_blank" href="http://support.nuvi.com">
            <span className="icon icon--sm icon--support"> </span>
            Support
          </a>
        </li>
        <li className="separated">
          <a href={ Navigation.buildPath('/logout') } data-method="post">
            <span className="icon icon--sm icon--logout"> </span>
            Logout
          </a>
        </li>
      </ul>
      );
  }
}

SideUserDropItems.propTypes = {
  appUrl: React.PropTypes.string.isRequired
};

export default SideUserDropdown;
