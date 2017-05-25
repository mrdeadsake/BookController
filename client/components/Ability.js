import React from 'react';
import Input from './Input';
import Skill from './Skill';
import Skills from '../helpers/Skills';

class Ability extends React.Component {
  
  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.number,
  };

  constructor(props){
    super(props)
    this.state = { value: this.props.value, skills: Skills.skills }
    this.onChange = ::this.onChange;
    this.calcBonus = ::this.calcBonus;
    this.renderSkills = ::this.renderSkills;
  }

  onChange(value) {
    this.setState({ value })
  }

  calcBonus(stat) {
    let number = Math.floor((stat-10)/2);
    if (number > 0) {
     number = "+" + number;
    }
    return number;
  }

  render() {
    return(
        <div className="row">
          <div className="p-small">{this.props.name}</div>
          <Input
            type="number"
            defaultValue={this.props.value}
            onChange={this.onChange}
            value={this.state.value}
            />
          <div className="ability-bonus center">{this.calcBonus(this.state.value)}</div>
          <div className="row column bonus">
            {this.renderSkills()}
          </div>
        </div>
      )
  }

  renderSkills() {
    const ability = this.props.name
    const skills = Skills.skills;
    let temp = [];
    switch (ability) {
      case 'Strength':
        temp = Skills.skills.strength;
        //return(Skills.skills.strength);
        //value = this.props.character[0].Strength;
        break;
      case 'Intelligence':
        temp = Skills.skills.intelligence;
        //return(Skills.skills.intelligence);
        //value = this.props.character[1].Intelligence;
        break;
      case 'Dexterity':
        temp = Skills.skills.dexterity;
        //return(Skills.skills.dexterity);
        //value = this.props.character[2].Dexterity;
        break;
      case 'Constitution':
        temp = Skills.skills.constitution;
        //return(Skills.skills.constitution);
        //value = this.props.character[3].Constitution;
        break;
      case 'Charisma':
        temp = Skills.skills.charisma;
        //return(Skills.skills.charisma);
        //value = this.props.character[4].Charisma;
        break;
      case 'Wisdom':
        temp = Skills.skills.wisdom;
        //return(Skills.skills.wisdom);
        //value = this.props.character[5].Wisdom;
        break;
      default:
        break;
    }
    return temp.map((skill)=>{
      console.log(temp)
      return (
      <Skill 
        bonus={Math.floor(((this.state.value)-10)/2)}
        key={skill.value}
        name={skill.name}
      />)
    })
    console.log(temp);
  }
}

export default Ability