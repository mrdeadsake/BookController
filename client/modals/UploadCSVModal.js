import React from 'react';
import Modal from './Modal';
import Dropzone from 'react-dropzone';
import { connect } from 'react-data-actions';
import modalActions from '../actions/modalActions';
import characterActions from '../actions/characterActions';

class UploadCSVModal extends React.Component {

  static connectedActions () {
    return {
      clearModal: modalActions.clearAction(),
    };
  }

  static propTypes = {
    upload: React.PropTypes.func,
  };

  constructor (...args) {
    super(...args);
    this.onCancel = ::this.onCancel;
    this.onSuccess = ::this.onSuccess;
    this.onAccepted = ::this.onAccepted;
  }

  onCancel () {
    this.props.clearModal();
  }

  onSuccess() {
    this.props.clearModal();
  }

  onDrop(accepted, rejected) {
    console.log(accepted);
    console.log(rejected);
  }

  onAccepted(files){
    const fileReader = new FileReader();
    const file = files[0];
    const upload = this.props.upload;
    fileReader.onloadend = function () {
      const data = this.result.slice(this.result.indexOf('base64') + 7, this.result.length);
      upload({data: data});
    }

    fileReader.readAsDataURL(file);

  }

  onRejected(files){
    console.log('rejected');
    console.log(files);
  }

  render () {
    return (
      <Modal onShadowClick={ this.onCancel } onCloseClick={ this.onCancel }>
        <Dropzone 
          onDropAccepted={this.onAccepted}
          onDropRejected={this.onRejected}
          accept=".csv"
          >
          <div>
            Click or drag csv file here to upload.
          </div>
        </Dropzone>
        <div className="pl">
          Instructions go here
        </div>
      </Modal>
      );
  }
}

export default connect(UploadCSVModal);