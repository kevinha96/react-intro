/**
 * LoginPage
 * For now just a page to go to confirm being logged in
 * author: Kevin Ha
 */

import React from 'react';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//LoginActions
import LoginActions from '../actions/LoginActions';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="login">
            It works!
            </div>
        );

    }
}


/*****************
 * REDUX SECTION *
 *****************/

function mapStateToProps(state) {
    return {
        user: state.user,
    }
}

export default connect(mapStateToProps)(LoginPage);
