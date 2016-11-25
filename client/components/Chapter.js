import { connect } from 'react-data-actions';
import React from 'react';
import NavDropdownSelect from './NavDropdownSelect';
import BookSelect from './BookSelect';
import Character from './Character';

class Chapter extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {selectedCharacter: props.allData.characters[0]}
    this.onCharSelect = ::this.onCharSelect;
    this.filterCharactersByChapter = ::this.filterCharactersByChapter;
  }

  static propTypes = {
    onChapterSelect: React.PropTypes.func,
    chapters: React.PropTypes.array,
    chapter: React.PropTypes.object,
  };

  onCharSelect(character) {
    this.setState({ selectedCharacter: character});
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  filterCharactersByChapter() {
    // const details = this.props.allData.details;
    // const characters = this.props.allData.characters;
    // const chapterNumber = this.props.chapter.number;
    let arr = [];
    this.props.allData.details.map((x)=>{
      if(x.number <= this.props.chapter.number && arr.indexOf(x.character_id)==-1) arr.push(x.character_id);
    })
    let charsToUse = this.props.allData.characters.filter((x)=>{
      if(arr.indexOf(x.id) != -1) return x;
    })
    return charsToUse
  }

  renderCharacterSelectList() {
    if (this.props.chapter != null && this.props.allData.characters != null) {
      let charUse = this.filterCharactersByChapter();
      return(<BookSelect books={charUse} onSelect={this.onCharSelect} selectedValue={this.state.selectedCharacter} />)
    } else return(null)
  }

  render() {
    let chapter = this.props.chapter;
    const chapters = this.props.chapters;
    if (chapter == null ){
      chapter = chapters[0];
    }
    return(
      <div>
        <NavDropdownSelect
             label=""
             onSelect={this.props.onChapterSelect}
             options={ chapters }
             textKey="name"
             valueKey="id"
             selectedValue={chapter.id}
             selectedText={chapter.name}
           />
          {this.renderCharacterSelectList()}
          <Character character={this.state.selectedCharacter} details={this.props.allData.details} chapters={this.props.chapters} chapter={this.props.chapter}/>
      </div>)
    }
  }

export default connect(Chapter)

          // <div className="row">
          //   <Chapter chapters={chapters} chapter={this.state.current_chapter}/>
          // </div>
          // <NavDropdownSelect
          //   label=""
          //   onSelect={this.onCharSelect}
          //   options={ characters }
          //   textKey="name"
          //   valueKey="id"
          //   selectedText={this.state.characterObject.name}
          // />
          // <Character character={this.state.characterObject} details={details} chapters={chapters} chapter={this.state.current_chapter}/>