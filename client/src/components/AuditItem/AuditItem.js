import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, CustomInput, Button, Modal, ModalBody, Form, FormGroup, Input } from 'reactstrap';
import './AuditItem.scss';

class AuditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [this.props.name]: this.props.value,
      finding: "",
      modal: false
    }
  }
  static propTypes = {
    checkType: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  }

  handleInputChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [e.target.name]: value
    });
  }

  toggleFindingModal = e => {
    e.preventDefault();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleCancelEdit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      finding: !prevState.finding,
      modal: false
    }));
  }

  handleSaveFinding = e => {
    e.preventDefault();
    this.setState(prevState => ({
      finding: !prevState.finding,
      modal: false
    }));
  }

  render() {
    const hasFinding = this.state.finding !== "" ? true : false;
    const { name, checkType, children } = this.props;
    return (
      <div className="form-inline">
        <CustomInput
          type={checkType}
          id={name}
          name={name}
          label={children}
          checked={this.state[name]}
          onChange={this.handleInputChange}
        />
        {/* eslint-disable-next-line*/}
        <a
          href="#"
          className="mx-3 inline-icon text-secondary"
          onClick={this.toggleFindingModal}
        >
          <i className="fas fa-comment-dots fa-lg"></i>
        </a>
        <Modal isOpen={this.state.modal} toggle={this.toggleFindingModal} className="modal-dialog-centered">
          <ModalBody className="bg-light">
            <Form>
              <FormGroup>
                <Input type="text" name="finding" placeholder="Enter findings here..." onChange={this.handleInputChange} value={this.state.finding} />
              </FormGroup>
              <Button color="primary" size="sm" onClick={this.toggleFindingModal}>Do Something</Button>{' '}
              <Button color="secondary" size="sm" onClick={this.toggleFindingModal}>Cancel</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default AuditItem;

