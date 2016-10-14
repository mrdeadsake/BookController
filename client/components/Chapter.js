import { WaitFor } from 'transcend-react';
import { connect } from 'react-data-actions';
import {chapterActions} from '../actions/chapterActions';
import React from 'react';
import _ from 'lodash';

class Chapter extends React.Component {
  static propTypes = {
    series: React.PropTypes.number,
    chapter: React.PropTypes.number,
    chapters: React.PropTypes.array,
  };

  static connectedActions(props){
    return {
      show: chapterActions.showAction({series_id: props.series, chapter_id: props.chapter}),    
    }
  }

  renderCharacterDetails() {
    return(<div className="row__cell">
      cell
    </div>)
  }

  render() {
    return(<div>
      <h2>Characters</h2>
      <div className="row">
        {this.renderCharacterDetails()}
      </div></div>
      )
  }
}

export default connect(Chapter)