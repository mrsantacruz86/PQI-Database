//REQUIRE AUTHORIZATION
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//This is a Higher Order Component that passes the pass the authentication info to the enclosed component

const requireAuth = ComposedComponent => {
	class Authenticate extends Component {
		componentWillMount() {
			if (!this.props.app.auth) {
				// console.log(this.props);
				// console.log(this.context);
				this.context.router.history.push("/login");
			}
		}
		render() {
			return (
				<ComposedComponent {...this.props} />
			);
		}
	}

	Authenticate.propTypes = {
		auth: PropTypes.bool.isRequired
	}
	Authenticate.contextTypes = {
		router: PropTypes.object.isRequired
	}

	const mapStateToProps = state => ({...state});
	return connect(mapStateToProps)(Authenticate);
}

export default requireAuth;