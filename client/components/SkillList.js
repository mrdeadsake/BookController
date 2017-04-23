import React from 'react';
import Skill from './Skill';
import Skills from '../helpers/Skills';

class SkillList extends React.Component {
  
  static propTypes = {
    character: React.PropTypes.object,
  };

  constructor(props){
    super(props)
  }


  renderAbilities(){
    const abilities = this.props;
    return abilities.map((ability, i)=>{
      return <Skill className={"characters"} name={Object.keys(ability)} value={Object.values(ability)} key={i} />
      })
  }

  render() {
    console.log(Skills.acrobatics);
    return(
        <div>
          <div className="abilities column small-6">{this.props.name}</div>
        </div>
      )
  }
}

export default SkillList