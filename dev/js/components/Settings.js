
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Settings extends React.Component {
	render() {
		return(
			<div>
			HOLD OFF FOR NOW
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(Settings);
