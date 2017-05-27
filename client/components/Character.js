import { connect } from 'react-data-actions';
import {characterDetailsActions} from '../actions/characterDetailsActions';
import {characterActions} from '../actions/characterActions';
import React from 'react';
import CharacterDetail from './CharacterDetail';
import _ from 'lodash';
import $ from 'jquery';

class Character extends React.Component {

  constructor(...args){
    super(...args);
      this.state = {
        message: 'ReactInline demo'
      }
    this.calculate = ::this.calculate;
    this.filterByCurrentChapter = ::this.filterByCurrentChapter;
    this.filterByCharacter = ::this.filterByCharacter;
    this.renderDetails = ::this.renderDetails;
    this.dataChanged = ::this.dataChanged;
    this.focus = ::this.focus;
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
      const classname = (i !== next.length-1) ? "bottom" : null;
      return (
        <CharacterDetail
          key={i}
          id={item.id}
          chapterId={item.number}
          details={item.details}
          submission={this.submitForm}
          className={classname}
        />

        )
    });
  }

        //  <div className={"flex"} key={i}>
        //   <div className={"chapter_id " + (i !== next.length-1 ? "bottom " : "")}>{item.number}</div>
        //   <div className={"details " + (i !== next.length-1 ? "bottom " : "")}>{item.details}</div>
        // </div>

  renderButton() {
  }

  filterByCurrentChapter(chapter){
    if (chapter.number <= this.props.chapter.number ) return true;
  }

  filterByCharacter(detail){
    if (detail.character_id == this.props.character.id) return true;
  }

      dataChanged(data) {
        // data = { description: "New validated text comes here" } 
        // Update your model from here 
        this.setState({...data})
    }
 
    customValidateText(text) {
      return (text.length > 0 && text.length < 64);
    }

  renderCharacter() {
    if (this.props.character != undefined){
      const details = this.props.details;
      const allowed = details.filter(this.filterByCurrentChapter);
      const next = allowed.filter(this.filterByCharacter);
      return(
        <div ref={"editstuff"}>
        <div className={"table-outline"}>
          {this.renderDetails(next)}
        </div>
        {this.renderButton()}
        </div>
        )
    }
    return(<div className="">
      details
    </div>)
  }

  submitForm(formData) {
    const id = formData["id"];
    const csrfToken = $('meta[name="csrf-token"]')[0]["content"];
    console.log("csrf", csrfToken);
    $.ajax({
      url: `/character_detail/${id}`,
      dataType: 'json',
      type: 'POST',
      data: formData,
      headers: {'X-CSRF-Token': csrfToken},

      success: function() {
        console.log("success")
      }.bind(this),
      error: function(response,status,err) {
      }
    });
  }

  focus() {
    this.textInput.focus();
  }

  render() {
    return(<div>
        {this.renderCharacter()}
      </div>
      )
  }
}

export default connect(Character)