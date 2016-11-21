import React from 'react';
import BookSelectOption from './BookSelectOption';


export default class BookSelect extends React.Component {
  static propTypes = {
    item: React.PropTypes.object,
    books: React.PropTypes.array,
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
    } else if (props.books.length) {
      defaultValue = props.books[0][this.props.valueKey];
      defaultText = props.books[0][this.props.textKey];
    }
    return { defaultValue, defaultText };
  }

  componentWillReceiveProps (nextProps) {
    const { defaultValue, defaultText } = this.getDefaultSelection(nextProps);
    this.setState({
      selectedValue: defaultValue,
      selectedText: defaultText,
    });
  }

  onBookClick(selectedBook) {
    this.setState({selectedValue: selectedBook[this.props.valueKey], selectedText: selectedBook[this.props.textKey]})
    if (this.props.onSelect) {
      this.props.onSelect(selectedBook);
    }
  }

  renderBooks(){
    const books = this.props.books;
    return books.map((book, i)=>{
      return <BookSelectOption className={"book"} option={book} onClick={::this.onBookClick} key={i} textKey={this.props.textKey} selected={this.props.selectedValue.id == book.id}>{book.name}</BookSelectOption>
    })

  }

  render() {
    return(
        <div>
          <div className="row">{this.renderBooks()}</div>
        </div>
      )
  }
}