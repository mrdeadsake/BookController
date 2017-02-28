import React from 'react';
import CharacterSelectOption from './CharacterSelectOption';


export default class CharacterSelect extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    characters: React.PropTypes.array,
    onSelect: React.PropTypes.func,
    selectedText: React.PropTypes.string,
    selectedValue: React.PropTypes.any,
  };

  constructor(props){
    super(props)
    const { defaultValue, defaultText } = this.getDefaultSelection(this.props);
    this.state = {
      selectedValue: defaultValue,
      selectedText: defaultText,
    }
  }

  static defaultProps = {
    valueKey: 'id',
    textKey: 'name',
  };

  getDefaultSelection (props) {
    let defaultValue = '';
    let defaultText = '';
    if (props.selectedText) {
      defaultValue = props.selectedValue;
      defaultText = props.selectedText;
    } else if (props.characters.length) {
      defaultValue = props.characters[0][this.props.valueKey];
      defaultText = props.characters[0][this.props.textKey];
    }
    return { defaultValue, defaultText };
  }

  componentWillReceiveProps (nextProps) {
    const { defaultValue, defaultText } = this.getDefaultSelection(nextProps);
    this.setState({
      selectedValue: defaultValue,
      selectedText: defaultText,
    });
    if (nextProps.characters.length > 0 && nextProps.characters.indexOf(this.props.selectedValue) == -1){
      this.props.onSelect(nextProps.characters[0])
    }
  }

  onCharacterClick(selectedCharacter) {
    this.setState({selectedValue: selectedCharacter[this.props.valueKey], selectedText: selectedCharacter[this.props.textKey]})
    if (this.props.onSelect) {
      this.props.onSelect(selectedCharacter);
    }
  }

  renderCharacters(){
    const characters = this.props.characters;
    return characters.map((character, i)=>{
      return <CharacterSelectOption className={"characters"} option={character} onClick={::this.onCharacterClick} key={i} textKey={this.props.textKey} selected={this.props.selectedValue.id == character.id}>{character.name}</CharacterSelectOption>
    })

  }

  render() {
    return(
        <div>
          <div className="row">{this.renderCharacters()}</div>
        </div>
      )
  }
}