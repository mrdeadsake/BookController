import React from 'react';
import Ability from './Ability';
import Abilities from '../helpers/Abilities';

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
      />
      })
  }

  calcBonus(stat) {
    return (Math.floor((stat-10)/2))
  }

  render() {
    return(
        <div>
          <div className="abilities">{this.renderAbilities()}</div>
        </div>
      )
  }
}

export default AbilityList