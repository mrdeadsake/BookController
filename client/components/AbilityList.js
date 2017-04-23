import React from 'react';
import Ability from './Ability';

class AbilityList extends React.Component {
  
  static propTypes = {
    abilities: React.PropTypes.array,
  };

  constructor(props){
    super(props)
  }


  renderAbilities(){
    const abilities = this.props.character;
    return abilities.map((ability, i)=>{
      return <Ability 
      className={"characters"} 
      name={Object.keys(ability)[0]} 
      value={Object.values(ability)[0]} 
      key={i} 
      bonus={this.calcBonus(Object.values(ability)[0])}
      />
      })
  }

  calcBonus(stat) {
    return (Math.floor((stat-10)/2))
  }

  render() {
    return(
        <div>
          <div className="abilities column small-6">{this.renderAbilities()}</div>
        </div>
      )
  }
}

export default AbilityList