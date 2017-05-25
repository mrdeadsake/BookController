import { connect } from 'react-data-actions';
import { dndCharacterActions, dndActions } from '../actions/dndCharacterActions';
import Abilities from '../helpers/Abilities';
import WaitFor from '../components/WaitFor';
import Skills from '../helpers/Skills';
import AbilityList from '../components/AbilityList';
import SkillList from '../components/SkillList';
import Navigation from '../components/Navigation';
import React from 'react';
import _ from 'lodash';

class DndCharacterIndex extends React.Component {

  constructor(...args){
    super(...args);
    this.renderCharacters = ::this.renderCharacters;
  }

  static connectedActions (props) {
    return {
      dnd: dndActions.indexAction(),
    }
  }

  render() {
    const characters = this.props.dnd.data || [];
    console.log(characters);
    return(
      <section className="breathe">
        <WaitFor data={this.props.dnd}>
          { this.renderCharacters(characters) }
        </WaitFor>
      </section>
      )
  }

  renderCharacters(characters) {
    if (characters.length === 0){
      return null;
    }
    return characters.map((character) => {
    return(
      <div className="row" key={character.id}>
        <div className="column small-6">
          <a href={Navigation.buildPath(`/dnd/${character.id}`)}>{character.name}</a>
        </div>
      </div>
      )
    })

  }

  createCharacterLinks(characters) {
    return characters.map((character) => {
      let link_name = character.name.replace(/\W/g, '_');
      var url = Navigation.buildPath(`/dnd/${character.id}`);
      return {id: character.id, url: url, text: character.name };
    });
  }

}

export default connect(DndCharacterIndex);