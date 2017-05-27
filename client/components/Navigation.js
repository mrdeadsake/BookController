import _ from 'lodash';
class Navigation {

  constructor (o) {
    this.options = Object.assign({}, this.getDefaults(), o || {});
  }

  getDefaults () {
    return {
    };
  }

  configure (options) {
    this.options = Object.assign(this.options, options || {});
  }

  buildPath (aRelativePath, data) {
    let relativePath = aRelativePath;
    if (relativePath.indexOf('://') === -1) {
      relativePath = this.normalizePath(relativePath);

      if (relativePath.indexOf(this.getSitePath()) !== 0) {
        return `${this.getSitePath()}${relativePath || ''}`;
      }
    }
    return this.buildDataTag(relativePath, data);
  }

  buildDataTag (path, data) {
    if (data && _.isObject(data)) {
      return `${path}#${JSON.stringify(data)}`;
    }
    return path;
  }

  getSitePath () {
    return this.normalizePath(this.options.sitePath);
  }

  normalizePath (path = '') {
    let normalizedPath = path;
    if (path.substr(0, 1) !== '/') {
      normalizedPath = '/' + normalizedPath;
    }
    if (normalizedPath.substr(normalizedPath.lastIndexOf('/')) === '/') {
      normalizedPath = normalizedPath.substring(0, normalizedPath.lastIndexOf('/'));
    }
    return normalizedPath;
  }

  navigate (aRelativeUrl, data) {
    let relativeUrl = aRelativeUrl;
    if (this.options.history && !relativeUrl.match(/^https?:\/\//i)) {
      const sitePath = this.options.sitePath;
      if (sitePath && relativeUrl.substr(0, sitePath.length) === sitePath) {
        relativeUrl = relativeUrl.substr(sitePath.length);
      }
      if (relativeUrl.substr(0, 1) === '/') {
        relativeUrl = relativeUrl.substr(1);
      }
      this.options.history.push({
        pathname: relativeUrl,
        state: data,
      });
    } else {
      window.location.href = this.buildPath(relativeUrl, data);
    }
  }
}

export default new Navigation();
