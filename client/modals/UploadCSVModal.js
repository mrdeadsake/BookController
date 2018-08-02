import React from 'react';
import Modal from './Modal';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { createDetails } from '../actions/characterDetailsActions';

class UploadCSVModal extends React.Component {

  static propTypes = {
    createDetails: React.PropTypes.func,
  };

  constructor (props) {
    super(props);
    this.onCancel = ::this.onCancel;
    this.onSuccess = ::this.onSuccess;
    this.onAccepted = ::this.onAccepted;
    this.createDetails = props.createDetails;
  }

  onComponentDidMount() {
    console.log(this)
  }

  onCancel () {
    this.props.onClose();
  }

  onSuccess() {
    this.props.onClose();
  }

  onDrop(accepted, rejected) {
  }

  onAccepted(files) {
    const id = this.props.id;
    const fileReader = new FileReader();
    const file = files[0];
    const upload = this.props.createDetails;
    fileReader.onloadend = function () {
      const data = this.result.slice(this.result.indexOf('base64') + 7, this.result.length);
      upload(id, {data : data});
    }

    fileReader.readAsDataURL(file);
    this.props.onClose();
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

UploadCSVModal.propTypes = {
  createDetails: React.PropTypes.func.isRequired
}


export default connect(null, { createDetails })(UploadCSVModal)
