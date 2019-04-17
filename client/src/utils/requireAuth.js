//REQUIRE AUTHORIZATION
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//This is a Higher Order Component that passes the pass the authentication info to the enclosed component

const requireAuth = ComposedComponent => {
	class Authorize extends Component {
		componentWillMount() {
			if (!this.props.auth) {
				// console.log(this.props);
				console.log(this.props.history);
				this.props.history.replace("/login");
			}
		}
		render() {
			return (
				<ComposedComponent />
			);
		}
	}

	Authorize.propTypes = {
		auth: PropTypes.bool.isRequired

	}

	const mapStateToProps = state => ({ auth: state.app.auth });

	return connect(mapStateToProps)(Authorize);
}

export default requireAuth;