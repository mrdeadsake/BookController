import React from 'react';

class Ability extends React.Component {
  
  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.number,
  };

  constructor(props){
    super(props)
  }

  render() {
    return(
        <div className="row">
          <div className="column">{this.props.name}</div>
          <div className="column">{this.props.value}</div>
          <div className="column">{this.props.bonus}</div>
        </div>
      )
  }
}

export default Ability