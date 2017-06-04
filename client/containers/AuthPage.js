/**
* Auth Page
* This is the authentication page for the app.
* author: @
*/

import React from 'react';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// LoginForm
import LoginForm from '../components/LoginForm';

//SignUpForm
import SignUpForm from '../components/SignUpForm';

// LoginActions
import LoginActions from '../actions/LoginActions';

// Stylesheets .scss is like .css but it has built in scoping
import '../stylesheets/containers/AuthPage.scss';

class AuthPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: props.user.isLoggedIn,
            isFacebookFetching: props.user.isFacebookFetching,
            email: props.user.email,

            //signup form
            isSigningUp: false,
        }
    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
        var { loginActions } = this.props;
        loginActions.getLogin();
    }


    handleSignUpButtonPress = () => {
        this.setState({
            isSigningUp: true,
        })
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements

        // this.props is a dictionary, so var { loginActions } is the same thing as var loginActions = this.props['loginActions'];
        var { user, loginActions } = this.props;
        return (
            <div className="auth">
                <div className="login">
                    <LoginForm loginFunction={loginActions.login}  />
                </div>
                Hello World!

                { user.isLoggedin
                    ? 'User is logged in'
                    : 'User is not logged in'
                }

                <div className="signup">
                    <button onClick={this.handleSignUpButtonPress}>
                        New User Sign Up
                    </button>

                    { this.state.isSigningUp && 
                        <SignUpForm />
                    }

                </div>
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

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(LoginActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
