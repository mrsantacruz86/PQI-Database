//REQUIRE AUTHORIZATION
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//This is a Higher Order Component that passes the pass the authentication info to the enclosed component

const requireAuth = ComposedComponent => {
	class Authorize extends Component {
		componentWillMount() {
			if (!this.props.auth) {
				// console.log(this.props);
				// console.log(this.context);
				this.context.router.history.push("/login");
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
	Authorize.contextTypes = {
		router: PropTypes.object.isRequired
	}

	const mapStateToProps = state => ({ ...state.app});

	return connect(mapStateToProps)(Authorize);
}

export default requireAuth;