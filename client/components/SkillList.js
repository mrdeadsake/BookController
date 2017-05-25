import React from 'react';
import Skill from './Skill';
import Skills from '../helpers/Skills';

class SkillList extends React.Component {
  
  static propTypes = {
    abilities: React.PropTypes.array,
  };

  constructor(props){
    super(props)
    this.state = {
      skills: Skills.skills,
    }
    this.renderSkills = ::this.renderSkills;
    //this.mapValues = ::this.mapValues;
  }


  renderSkills(){
    const abilities = this.props;
    //console.log(abilities);
    const skills = Skills.skills;
    //console.log(skills);
    //console.log(abilities.character);
    skills.map((skill) => {
      //console.log(skill)
      //this.mapValues(skill.governingAttribute);
      //console.log(Object.keys(skill));
      //console.log(Object.values(skill));

    })
    return skills.map((skill, i)=>{
      const name = Object.values(skill)[1];
      const atr = Object.values(skill)[2];
      return <Skill className={"skills"} name={Object.values(skill)[1]} value={this.mapValues(skill.governingAttribute)} key={i} />
      })
  }

  render() {
    return(
        <div>
          <div className="skills column small-6">{this.renderSkills()}</div>
        </div>
      )
  }

  mapValues(governingAttribute) {
    let value = 0;
    switch(governingAttribute) {
      case 'Strength':
        value = this.props.character[0].Strength;
        break;
      case 'Intelligence':
        value = this.props.character[1].Intelligence;
        break;
      case 'Dexterity':
        value = this.props.character[2].Dexterity;
        break;
      case 'Constitution':
        value = this.props.character[3].Constitution;
        break;
      case 'Charisma':
        value = this.props.character[4].Charisma;
        break;
      case 'Wisdom':
        value = this.props.character[5].Wisdom;
        break;
      default:
        break;
    }
    console.log(value);
    return value;
  }
}

export default SkillList