import React from 'react';
import Skills from '../helpers/Skills';

class Stat extends React.Component {
  
  static propTypes = {
    name: React.PropTypes.string,
    bonus: React.PropTypes.number,
    governingAttribute: React.PropTypes.string,
    hasProficiency: React.PropTypes.bool,
    isDoubled: React.PropTypes.bool,
    override: React.PropTypes.object,
  };

  constructor(props){
    super(props)
  }

  render() {
    console.log(Skills.acrobatics)
    return(
        <div className="row">
          <div className="column">{this.props.name}</div>
          <div className="column">{this.props.value}</div>
          
        </div>
      )
  }
}

export default Stat