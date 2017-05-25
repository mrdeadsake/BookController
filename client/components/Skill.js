import React from 'react';
import Skills from '../helpers/Skills';
import Checkbox from './Checkbox';

class Skill extends React.Component {
  
  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    bonus: React.PropTypes.number,
    selected: React.PropTypes.bool,
    hasProficiency: React.PropTypes.bool,
    isDoubled: React.PropTypes.bool,
    override: React.PropTypes.object,
  };

  static defaultProps = {
    selected: false
  }

  constructor(props){
    super(props)
    this.state = {checked: false}
    this.onChange = ::this.onChange;
    this.calcBonus = ::this.calcBonus;
  }

  onChange() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return(
        <div className="row">
          <div className={"skillstuff "+this.props.selected ? 'highlight': ''}>
            {this.props.name}
                    <span className="center mx">{this.calcBonus()}</span>
                              <Checkbox 
            onChange={this.onChange}
          />
          </div>
        </div>
      )
  }

  calcBonus() {
    let number = this.props.bonus;
    if (this.state.checked) {
      number = number + 2;
    }
    if (number > 0) {
      number = "+" + number;
    }
    return number;
  }

  renderSkills(ability) {
    const skills = Skills.skills;
    let rendered = [];
    switch (ability) {
      case 'strength':
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
  }
}

export default Skill