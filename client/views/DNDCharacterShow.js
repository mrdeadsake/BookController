import { connect } from 'react-data-actions';
import { dndCharacterActions, dndActions } from '../actions/dndCharacterActions';
import Abilities from '../helpers/Abilities';
import Skills from '../helpers/Skills';
import AbilityList from '../components/AbilityList';
import SkillList from '../components/SkillList';
import React from 'react';
import _ from 'lodash';

class DndCharacterShow extends React.Component {

  constructor(...args){
    super(...args);
    this.state = {
      name: "Hoid",
      playerName: "Derek",
        abilities:
        [
          {Strength: 8},
          {Intelligence: 16},
          {Dexterity: 16},
          {Constitution: 14},
          {Charisma: 19},
          {Wisdom: 6}
        ],
      subrace: "none ",
      race: "half-elf",
      background: "criminal",
      alignment: "Chaotic Good",
      level: 1,
      experience: 0,
      class: "Bard"
    }
    this.renderAbilities
  }

  static connectedActions (props) {
    return {
      dnd: dndActions.indexAction(),
    }
  }

  render() {
    return(
      <section className="breathe">
          { this.renderCharacter() }
          <div className="">
            { this.renderAbilities() }    
            { this.renderSkills() }
          </div>
      </section>
      )
  }

  renderAbilities() {
    return(
      <AbilityList character={this.state.abilities} onChange={this.onUpdateAbilityScore} />
    )
  }

  renderSkills() {
    /*return(
        <SkillList character={this.state.abilities} />
      )*/
  }

  onUpdateAbilityScore(abilityScore) {
    this.setState({
      abilityScore
    })
  }

  renderCharacter() {
    return(
      <div className="row">
        <div className="column small-6">
          {this.state.name}
        </div>
        <div className="column small-6">
          {this.renderCharacterStats()}
        </div>
      </div>
      )
  }

  renderCharacterStats() {
    return (
      <div>
        <div className="row">
          <div className="column small-4 stats">
            {this.state.class}
            {this.state.level}
          </div>
          <div className="column small-4 stats">
            {this.state.background}
          </div>
          <div className="column small-4 stats">
            {this.state.playerName}
          </div>
        </div>
        <div className="row">
          <div className="column small-4 stats">
            {this.state.subrace}
            {this.state.race}
          </div>
          <div className="column small-4 stats">
            {this.state.alignment}
          </div>
          <div className="column small-4 stats">
            {this.state.experience}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(DndCharacterShow);