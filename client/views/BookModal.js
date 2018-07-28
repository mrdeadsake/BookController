import React from 'react';
import modalActions from '../actions/modalActions';
import { connect } from 'react-data-actions';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class BookModal extends React.Component {

  static propTypes = {
    modal: React.PropTypes.node,
  };

  static connectedActions () {
    return {
      modal: modalActions.getAction(),
    };
  }

  render () {
    if (this.props.modal) {
      document.body.setAttribute('has-modal', true);
    } else {
      document.body.removeAttribute('has-modal');
    }
    return (
      <div className="listening-app__modal">
        <ReactCSSTransitionGroup transitionName="fadeIn" transitionEnter transitionEnterTimeout={200} transitionLeaveTimeout={200}>
          { this.props.modal }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default connect(BookModal);
