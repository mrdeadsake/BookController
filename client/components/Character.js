import { connect } from 'react-data-actions';
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
  }

  calculate() {
      const chapters = this.props.chapters;
      const details = this.props.details;
      const allowed = details.filter(this.filterByCurrentChapter);
      const next = allowed.filter(this.filterByCharacter);
      this.setState({d: next});
      this.renderDetails(next);
      // next is a list of all details that are for the current character
      // allowed is a list of all the chapters that are up to the current

      // return all details where the chapter_id is found in allowed

  }

  static propTypes = {
    character: React.PropTypes.object,
    details: React.PropTypes.array,
    chapter: React.PropTypes.number,
    chapters: React.PropTypes.array,
  };

  renderDetails(next) {
    return next.map((item, i)=> {return <div key={i}>{item.details}</div>});
  }

  filterByCurrentChapter(detail){
    if (detail.number <= this.props.chapter ) return true;
  }

  filterByCharacter(detail){
    if (detail.character_id == this.props.character.id) return true;
  }

  renderCharacter() {
    if (this.props.character != undefined){
      const chapters = this.props.chapters;
      const details = this.props.details;
      const allowed = details.filter(this.filterByCurrentChapter);
      const next = allowed.filter(this.filterByCharacter);

      return(
        <div>
          <h2>{this.props.character.name}</h2>
          {this.renderDetails(next)}
        </div>
        )
    }
    return(<div className="row__cell">
      details
    </div>)
  }

  render() {
    return(<div>
      <div className="row">
        {this.renderCharacter()}
      </div>
      </div>
      )
  }
}

export default connect(Character)