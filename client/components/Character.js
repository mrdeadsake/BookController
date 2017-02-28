import { connect } from 'react-data-actions';
import {characterDetailsActions} from '../actions/characterDetailsActions';
import {characterActions} from '../actions/characterActions';
import React from 'react';
import _ from 'lodash';

class Character extends React.Component {

  constructor(...args){
    super(...args);
    this.state = {};
    this.calculate = ::this.calculate;
    this.filterByCurrentChapter = ::this.filterByCurrentChapter;
    this.filterByCharacter = ::this.filterByCharacter;
    this.renderDetails = ::this.renderDetails;
    this.updateStuff = ::this.updateStuff;
  }

  calculate() {
      const details = this.props.details;
      const allowed = details.filter(this.filterByCurrentChapter);
      const next = allowed.filter(this.filterByCharacter);
      this.setState({d: next});
      this.renderDetails(next);
      // next is a list of all details that are for the current character
      // allowed is a list of all the chapters that are up to the current

      // return all details where the chapter_id is found in allowed

  }

  static connectedActions (props) {
    return {
      //update: characterActions.createAction(),
      //show: characterActions.indexAction()
    }
  }

  static propTypes = {
    character: React.PropTypes.object.isRequired,
    details: React.PropTypes.array,
    chapter: React.PropTypes.object,
  };

  renderDetails(next) {
    return next.map((item, i)=> {
      return (
        <div className={"row"} key={i}>
          <div className={"row__cell--fixed chapter_id " + (i !== next.length-1 ? "bottom " : "")}>{item.number}</div>
          <div className={"row__cell details " + (i !== next.length-1 ? "bottom " : "")}>{item.details}</div>
        </div>
        )
    });
  }

  renderButton() {
    // return (
    //   <button onClick={this.updateStuff}>Update info</button>
    // )
  }

  filterByCurrentChapter(chapter){
    if (chapter.number <= this.props.chapter.number ) return true;
  }

  filterByCharacter(detail){
    if (detail.character_id == this.props.character.id) return true;
  }

  updateStuff(){
    let details = {character_id: 2, chapter_id: 8, details:'Kaladin does stuff', location: 'some place'};
    this.props.update(details);
    //this.props.show);
  }

  renderCharacter() {
    if (this.props.character != undefined){
      const details = this.props.details;
      const allowed = details.filter(this.filterByCurrentChapter);
      const next = allowed.filter(this.filterByCharacter);
      return(
        <div>
        <div className={"table-outline"}>
          {this.renderDetails(next)}
        </div>
        {this.renderButton()}
        </div>
        )
    }
    return(<div className="row__cell">
      details
    </div>)
  }

  render() {
    return(<div>
        {this.renderCharacter()}
      </div>
      )
  }
}

export default connect(Character)