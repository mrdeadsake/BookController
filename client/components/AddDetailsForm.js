import React from 'react';
 
export default class AddDetailsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {chapter: props.chapters[0], characterName: "", details: ""}
    this.handleSubmit = ::this.handleSubmit;
    this.handleChange = ::this.handleChange;
  }

  static propTypes = {
    submission: React.PropTypes.func,
    book: React.PropTypes.object,
    chapters: React.PropTypes.array
  }

  onSuccess (result) {
    // if there is no action on the Form or if it returns nothing, this gets called immiediately 
    // otherwise if the action returns a promise, it will wait for it to finish 
    // the result is the result of the promise. 
    //this.props.navigate(result.id);
  }
 
  // onFormValidate (model) { // this function returns an array of errors. 
  //   const errors = [];
  //   if (!model.agree) {
  //     errors.push('You need to agree to the terms');
  //   }
  //   return errors;
  // }
 
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="characterName">Character Name</label>
            <input
              name="characterName"
              id="characterName"
              onChange={this.handleChange}
              value={this.state.characterName}
              type="text"
              />
        </div>
        <div>
          <label htmlFor="chapter">Chapter</label>
          <select
            name="chapter"
            id="chapter"
            value={this.state.chapter}
            onChange={this.handleChange}
            >
            {this.renderOptions()}
          </select>
        </div>
        <div>
          <label htmlFor="details">Character Details</label>
            <input
              name="details"
              id="details"
              onChange={this.handleChange}
              value={this.state.details}
              type="text"
              />
        </div>
        <input className="" type="submit" value="Submit"/>
      </form>
    );
  }

  renderOptions() {
    return (
      this.props.chapters.map((x) => {
        return (<option value={x.id} key={x.id}>{x.name}</option>)
      })
      )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submission({chapter:this.state.chapter, character:this.state.characterName, details:this.state.details })
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

}