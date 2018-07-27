import React from 'react';
import Modal from './Modal';
import Dropzone from 'react-dropzone';

export default class UploadCSVModal extends React.Component {

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
    this.props.onClose();
  }

  onSuccess() {
    this.props.onClose();
  }

  onDrop(accepted, rejected) {
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
