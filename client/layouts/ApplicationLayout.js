import React from 'react';
import { UserDropDown, Navigation, CompanySelector } from 'transcend-react';

export default class ApplicationLayout extends React.Component {

  static propTypes = {
    children: React.PropTypes.node.isRequired,
    selectedProduct: React.PropTypes.string,
    env: React.PropTypes.object.isRequired,
    appUrl: React.PropTypes.string.isRequired,
    logoutUrl: React.PropTypes.string,
  };

  render () {
    return (
      <div className="application-layout">
        { this.props.children }
      </div>
    );
  }

  renderNavigationLogo () {
    let url = `${this.props.env.SMITHERS_URL}/${this.props.env.SMITHERS_PRODUCT_NAME}`;
    if (this.props.env.currentCompany && this.props.env.currentCompany.slug) {
      url = `${url}/${this.props.env.currentCompany.slug}`;
    }
    return (
      <div className="navbar__logo">
        <a href={ url }>
          <div className="navbar__logo__img" style={ this.logoStyles() }></div>
        </a>
      </div>
    );
  }

  renderNavigationLinks () {
    const links = [];
    if (this.hasNewMonitorsAccess()) {
      links.push({
        url: `${this.props.env.GAVIN_URL}/${this.props.env.GAVIN_PRODUCT_NAME}`,
        name: 'Monitors',
        // appendCompanySlug: true,
      });
    } else {
      links.push({
        url: `${this.props.env.NUVIS_URL}/client/overview/view`,
        name: 'Monitors',
      });
    }
    if (this.hasChannelsAccess()) {
      links.push({
        url: `${this.props.env.UHF_URL}/${this.props.env.UHF_PRODUCT_NAME}`,
        name: 'Channels',
        // appendCompanySlug: true,
      });
    } else {
      links.push({
        url: `${this.props.env.NUVIS_URL}/channel/dashboard`,
        name: 'Channels',
      });
    }
    links.push({
      url: `${this.props.env.GUTENBERG_URL}/${this.props.env.GUTENBERG_PRODUCT_NAME}`,
      name: 'Publishing',
      // appendCompanySlug: true,
    });
    if (!this.isWhiteLabel() || this.hasAudiencesAccess()) {
      links.push({
        url: `${this.props.env.MINARET_URL}/${this.props.env.MINARET_PRODUCT_NAME}`,
        name: 'Audiences',
        // appendCompanySlug: true,
      });
    }
    links.push({
      url: `${this.props.env.NUVIS_URL}/admin/`,
      name: 'Administration',
    });
    return (
      <div className="navbar__links" id="navbar-main">
        <ul className="navbar__links">
          { links.map(::this.renderNavigationLink) }
        </ul>
      </div>
    );
  }

  renderNavigationLink (link) {
    const className = ['navbar__links__link'];
    if (this.props.selectedProduct && this.props.selectedProduct.toLowerCase() === link.name.toLowerCase()) {
      className.push('navbar__links__link--selected');
    }
    let url = link.url;
    if (link.appendCompanySlug && this.props.env.currentCompany && this.props.env.currentCompany.slug) {
      url = `${url}/${this.props.env.currentCompany.slug}`;
    }
    return (
      <li className={ className.join(' ') } key={ link.name }>
        <a href={ url }>{ link.name }</a>
      </li>
    );
  }

  renderCompanySelector () {
    const companies = this.props.env.companies || [];
    if (companies.length > 1 && this.props.env.currentCompany && this.props.env.currentCompany.guid) {
      return (
        <div className="navbar__company">
          <CompanySelector
            companies={ companies }
            currentCompany={ this.props.env.currentCompany }
            appURL={ this.props.appUrl }
            productName={ this.props.env.PRODUCT_NAME }
          />
        </div>
      );
    }
    return undefined;
  }

  renderUserDropdown () {
    return (
      <div className="navbar__user">
        <UserDropDown
          csrfToken= { this.props.env.csrfToken }
          logoutUrl={ this.props.logoutUrl || Navigation.buildPath('/sessions') }
          user={ this.props.env.currentUser }
          company={ this.props.env.currentCompany }
        >
          { this.renderCompanyAdmin() }
          { this.renderAgencyAdmin() }
        </UserDropDown>
      </div>
    );
  }

  renderAgencyAdmin () {
    if (this.canManageAgency() && this.props.env.features.manageAgencyFeature) {
      return (
        <li>
          <a href={ `${this.props.env.SMITHERS_URL}/${this.props.env.SMITHERS_PRODUCT_NAME}/manage_agency` }>Manage Agency</a>
        </li>
      );
    }
    return undefined;
  }

  renderCompanyAdmin () {
    if (this.canManageUsers() && this.props.env.features.manageCompanyFeature) {
      return (
        <li>
          <a href={ `${this.props.env.SMITHERS_URL}/${this.props.env.SMITHERS_PRODUCT_NAME}/${this.props.env.currentCompany.slug}/manage_users` }>Manage Company</a>
        </li>
      );
    }
    return undefined;
  }

  canManageUsers () {
    return this.props.env.currentPosition.can_manage_users || this.canManageAgency();
  }

  canManageAgency () {
    return this.props.env.currentPosition.can_manage_agency;
  }

  logoStyles () {
    if (this.props.env.currentCompany && this.props.env.currentCompany.navbar_logo_url) {
      return { backgroundImage: `url(${this.props.env.currentCompany.navbar_logo_url})` };
    }
    return {};
  }

  hasAudiencesAccess () {
    return this.props.env.currentCompany && this.props.env.currentCompany.has_audiences_access;
  }

  hasChannelsAccess () {
    return this.props.env.currentCompany && this.props.env.currentCompany.has_channels_access;
  }

  hasNewMonitorsAccess () {
    return this.props.env.currentCompany && this.props.env.currentCompany.has_monitors_access;
  }

  isWhiteLabel () {
    return this.props.env.currentCompany && this.props.env.currentCompany.is_white_label;
  }
}
