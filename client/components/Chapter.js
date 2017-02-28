import { connect } from 'react-data-actions';
import React from 'react';
import NavDropdownSelect from './NavDropdownSelect';
import CharacterSelect from './CharacterSelect';
import Character from './Character';

class Chapter extends React.Component {
  
  constructor(props){
    super(props);
    this.filterCharactersByChapter = ::this.filterCharactersByChapter;
  }

  componentWillReceiveProps(nextProps){
        if (nextProps.characters && nextProps.characters.indexOf(nextProps.selectedValue) == -1){
          if (this.state.character != nextProps.characters[0]){
              this.state.character == nextProps.characters[0]
          }
        }
      
  }

  static propTypes = {
    onChapterSelect: React.PropTypes.func,
    onCharSelect: React.PropTypes.func,
    chapters: React.PropTypes.array,
    chapter: React.PropTypes.object,
    character: React.PropTypes.object,
  };

  // onCharSelect(character) {
  //   this.setState({ character: character});
  // }

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
      return(
        <CharacterSelect 
          characters={charUse} 
          onSelect={this.props.onCharSelect} 
          selectedValue={this.props.character} />
        )
    } else return(null)
  }

  render() {
    let chapter = this.props.chapter;
    const chapters = this.props.chapters;
    if (chapter == null ){
      chapter = chapters[0];
    }
    if (chapters.length == 0){
      return (
        <div>No Chapters</div>
        )
    }
    return(
      <div>
          {this.renderCharacterSelectList()}
          {
            this.props.character 
            ? <Character character={this.props.character} details={this.props.allData.details} chapter={this.props.chapter}/>
            : null
          }
      </div>)
    }
  }

export default Chapter

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