import React from 'react';

export default class Modal extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    onCloseClick: React.PropTypes.func,
    onShadowClick: React.PropTypes.func,
  };

  static defaultProps () {
    return {
      closeButton: true,
    };
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      isDisplayed: false,
    };
  }

  onModalShadowClick (evt) {
    // only exactly it
    if (evt.target === this.refs.shadow || evt.target === this.refs.fill) {
      if (this.props.onShadowClick) {
        this.props.onShadowClick(evt);
      }
    }
  }


              //{ this.props.children }

  render () {
    return (
      <div className={ `modal ${this.props.className || ''}` }>
        <div className="modal__shadow" onClick={ ::this.onModalShadowClick } ref="shadow"></div>
        <div className="modal__fill" onClick={ ::this.onModalShadowClick } ref="fill">
          <div className="modal__content">
            { this.renderOptions() }
            { this.renderCloseButton() }
          </div>
        </div>
      </div>
    );
  }

  renderCloseButton () {
    if (this.props.onCloseClick) {
      return (
        <div className="modal__close" onClick={ this.props.onCloseClick }>
          <i className="icon icon--close"></i>
        </div>
      );
    }
  }

  renderOptions () {
    return(
      <div>
        <div className="row center-on-small">
          <div className="column">
            <button>Upload via CSV</button>
          </div>
        </div>

        <div className="row">
          <div className="column small-6">
              <button>Add Book</button>
          </div>
          <div className="column small-6">
              <button>Add Character</button>
          </div>
        </div>

        <div className="row">
          <div className="column small-6">
              <button>Add Detail</button>
          </div>
          <div className="column small-6">
              <button>Add Chapter</button>
          </div>
        </div>
      </div>
      )
  }
}
