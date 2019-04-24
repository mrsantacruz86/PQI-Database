import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AuditItem.scss';

class AuditItem extends Component {
	render() {
		return (
			<div>
				<p>This is a text</p>
			</div>
		);
	}
}

AuditItem.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	comment: PropTypes.string.isRequired
}

export default AuditItem;