import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { CustomInput, Button, Modal, ModalBody, Input, Label } from 'reactstrap';
import { handleItemChange, handleFindingChange } from '../../actions/houseAuditActions';
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
    item: PropTypes.object.isRequired,
  }

  toggleFindingModal = e => {
    e.preventDefault();
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  handleFindingChange = (e) => {
    e.preventDefault();
    const { index } = this.props;
    this.props.handleFindingChange(index, e.target.value);
  }

  handleCancelEdit = e => {
    e.preventDefault();
    this.setState( {
      modal: false
    });
  }

  handleSaveFinding = e => {
    e.preventDefault();
    this.setState({
      modal: false
    });
  }
  handleItemCheck = () => {
    const { index, item } = this.props;
    this.props.handleItemChange(index, item.value);
  }
  render() {
    const { name, label, findings, value } = this.props.item;
    const { index } = this.props.item;
    return (
      <div className="form-inline">
        <Input
          id={name}
          index={index}
          type="checkbox"
          name={name}
          label={label}
          checked={value}
          onChange={this.handleItemCheck}
        />
        <Label for={name}>{label}</Label>
        {/* eslint-disable-next-line*/}
        <a
          href="#"
          className={`mx-3 inline-icon text-secondary${findings === "" ? "" : " text-danger"}`}
          onClick={this.toggleFindingModal}

        >
          <i className="fas fa-comment-dots"></i>
        </a>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleFindingModal}
          className="modal-dialog-centered"
        >
          <ModalBody className="bg-light">
            <Input
              type="textarea"
              name="findings"
              placeholder="Enter findings here..."
              onChange={this.handleFindingChange}
              value={findings} />
            <Button color="primary"
              size="sm"
              onClick={this.toggleFindingModal}
            >
              Do Something
            </Button>
            <Button color="secondary" size="sm" onClick={this.toggleFindingModal}>Cancel</Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps, {
  handleItemChange,
  handleFindingChange
})(AuditItem);

