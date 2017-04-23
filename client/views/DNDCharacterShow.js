import { connect } from 'react-data-actions';
import { dndCharacterActions } from '../actions/dndCharacterActions';
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
      [{strength: 10},
      {intelligence: 16},
      {dexterity: 16},
      {constitution: 14},
      {charisma: 19},
      {wisdom: 6}],
      subrace: "none ",
      race: "half-elf",
      background: "criminal",
      alignment: "Chaotic Good",
      level: 1,
      experience: 0,
      class: "Bard"
    }
  }

  // static connectedActions (props) {
  //   return {
  //     showCharactersAction: dndCharacterActions.indexAction("derek")
  //   }
  // }

  render() {
    return(
      <section className="breathe">
          { this.renderCharacter() }
          <div className="">
            { this.renderAbilities() }
            {this.renderSkills()}
          </div>
      </section>
      )
  }

  renderAbilities() {
    return(
      <AbilityList character={this.state.abilities} />
    )
  }

  renderSkills() {
    return(
        <SkillList character={this.state.character} />
      )
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

export default DndCharacterShow