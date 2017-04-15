
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Settings extends React.Component {
	render() {
		return(
			<div className="settings">
				<p className="setting-property">Age group</p>
				<div className="age-first-column">
					<label><input type="radio" />&lt;10</label><br/>
					<label><input type="radio" />10-14</label><br/>
					<label><input type="radio" />15-19</label><br/>
					<label><input type="radio" />20-24</label><br/>
					<label><input type="radio" />25-34</label>
				</div>
				<div>
					<label><input type="radio" />35-44</label><br/>
					<label><input type="radio" />45-54</label><br/>
					<label><input type="radio" />55-64</label><br/>
					<label><input type="radio" />65-74</label><br/>
					<label><input type="radio" />75+</label>
				</div>

				<p className="setting-property">Are there children in your household?</p>
				<label className="radio-yes"><input type="radio" /> Yes</label>
				<label><input type="radio" /> No</label>

				<p className="setting-property">Gender</p>
				<label><input type="radio" />Decline to state</label>
				<br/>
				<label className="gender-woman"><input type="radio" />Woman</label>
				<label><input type="radio" />Man</label>

				<p className="setting-property">Do you live in Tacoma?</p>
				<label className="radio-yes"><input type="radio" /> Yes</label>
				<label><input type="radio" /> No</label>
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
