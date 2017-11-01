import React from 'react';
import Modal from './Modal';
import Dropzone from 'react-dropzone';
import { connect } from 'react-data-actions';
import modalActions from '../actions/modalActions';
import characterActions from '../actions/characterActions';
import AddDetailsForm from '../components/AddDetailsForm';
import $ from 'jquery';

class AddDetailModal extends React.Component {

  static connectedActions () {
    return {
      clearModal: modalActions.clearAction(),
    };
  }

  static propTypes = {
    book: React.PropTypes.object,
    chapters: React.PropTypes.array,
  };

  constructor (...args) {
    super(...args);
    this.onCancel = ::this.onCancel;
    this.onSuccess = ::this.onSuccess;
    this.onAccepted = ::this.onAccepted;
    this.submitForm = ::this.submitForm;
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
        { this.renderForm() }
      </Modal>
      );
  }

  renderForm() {
    const book = this.props.book || {}
    const chapters = this.props.chapters || {}
    return(
      <AddDetailsForm 
        onCancel={ this.onCancel}
        onSuccess={ this.onSuccess}
        book={book}
        chapters={chapters}
        submission={this.submitForm}
      />
      )
  }
  
  submitForm(formData) {
    console.log(formData)
    const id = formData["id"];
    const series = this.props.book.book_series_id;
    console.log(series)
    const csrfToken = $('meta[name="csrf-token"]')[0]["content"];
    console.log("csrf", csrfToken);
    $.ajax({
      url: `${series}/character_detail/`,
      dataType: 'json',
      type: 'PUT',
      data: formData,
      headers: {'X-CSRF-Token': csrfToken},

      success: function() {
        console.log("success")
      }.bind(this),
      error: function(response,status,err) {
      }
    });
  }

}

export default connect(AddDetailModal);