import React from 'react';

export default class CharacterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editValue: props.details, value: props.details}
    this.focus = ::this.focus;
    this.handleKeyPress = ::this.handleKeyPress;
    this.handleChange = ::this.handleChange;
    this.handleSubmit = ::this.handleSubmit;
    this.handleKeyDown = ::this.handleKeyDown;
  }

  static propTypes = {
    id: React.PropTypes.number,
    chapterId: React.PropTypes.number,
    details: React.PropTypes.string,
    submission: React.PropTypes.func,
    className: React.PropTypes.string,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({value: nextProps.details, editValue: nextProps.details})
    }
  }

  render() {
    return(
      <div className="flex">
      <div className={"chapter_id"}>{this.props.chapterId}</div>
        <form className="" onSubmit={this.handleSubmit}>
          <input 
            tabIndex={-1} 
            className="editable details" 
            ref={(input) => {this.textInput = input;}} 
            type="text"
            value={this.state.editValue}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onKeyDown={this.handleKeyDown}
          />
          <input className="hidden" type="submit" value="Submit"/>
        </form>
        <span className="glyphicon glyphicon-pencil details" onClick={this.focus}/>
      </div>
    )
  }

  focus() {
    this.textInput.focus();
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.setState({value: e.target.value})
      this.textInput.blur();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submission({id: this.props.id, details: this.state.value})
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({editValue:e.target.value})
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      this.setState({editValue: this.state.value})
      this.textInput.blur();
    }
  }

}