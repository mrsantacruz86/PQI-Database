import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, CustomInput, Button } from 'reactstrap';
import './AuditItem.scss';

class AuditItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			[this.props.name]: this.props.value,
			finding: "",
			comment: ""
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

		this.setState({
			[this.props.name]: target.checked
		});
	}

	render() {
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
				<a href="#" className="mx-3 inline-icon text-secondary">
					<i className="fas fa-comment-dots fa-lg"></i>
				</a>
			</div>
		);
	}
}

export default AuditItem;

