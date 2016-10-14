import React from 'react';
import _ from 'lodash';

export default class BookSeriesListItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
  };
  render() {
    let item = this.props.item;
    return(
      <div className="newName">
          {item.name}
      </div>
      )
  }
}