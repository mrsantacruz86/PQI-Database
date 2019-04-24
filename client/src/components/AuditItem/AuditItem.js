import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, CustomInput, Button } from 'reactstrap';
import './AuditItem.scss';

class AuditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      finding: ""
    }
  }
  static propTypes = {
    checkType: PropTypes.oneOf(["checkbox", "radio"]).isRequired,
    id: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired
  }

  handleToggle = e => {
    this.setState = {
      ...this.state,
      checked: !this.state.checked
    }
  }

  render() {
    return (
      <div className="form-inline">
        <CustomInput
          type={this.props.checkType}
          id={this.props.name}
          name={this.props.name}
          label={this.props.children}
          checked={this.state.checked}

        />
        <a className="mx-5 inline-icon">
          <i class="fas fa-comment-dots"></i>
        </a>
      </div>
    );
  }
}

export default AuditItem;

