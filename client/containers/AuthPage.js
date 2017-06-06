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
//SignUpActions
import SignUpActions from '../actions/SignUpActions';
//LogOutActions
import LogOutActions from '../actions/LogOutActions';

// Stylesheets .scss is like .css but it has built in scoping
import '../stylesheets/containers/AuthPage.scss';

class AuthPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            //signup form
            isSigningUp: false,
        }
    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html
        var { loginActions, signUpActions, logOutActions } = this.props;
        loginActions.getLogin();
    }


    handleSignUpButtonPress = () => {
        this.setState({
            isSigningUp: true,
        })
    }

    cancelSignUp = () => {
        this.setState({
            isSigningUp: false,
        })
    }

    logOut = () => {
        this.props.logOutActions.logOut();       
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements

        // this.props is a dictionary, so var { loginActions } is the same thing as var loginActions = this.props['loginActions'];
        var { user, loginActions, signUpActions } = this.props;
        return (
            <div className="auth">
                <div className="login">
                    Login:
                    <LoginForm loginFunction={loginActions.login} /> <br />
                </div>
                
                <div className="signup">
                    <button onClick={this.handleSignUpButtonPress}>
                        New User Sign Up
                    </button>
                    

                    { this.state.isSigningUp && 
                        <div className="signupform">
                            <br /><SignUpForm signUpFunction={signUpActions.signup} cancelSignUp={this.cancelSignUp}/>
                    
                            <button onClick={this.cancelSignUp}>
                                Cancel Sign Up
                            </button>
                        </div>
                    }

                </div>

                <br />

                { user.isLoggedIn ? (
                    <div clasName="loggedin">
                        <div>
                        User is logged in <br />
                        Email: {user.email} <br />
                        </div>
                    
                        <div className="logoutbutton">
                            <button onClick={this.logOut}>
                                Log Out
                            </button>
                        </div>
                    </div>
                    )
                    : 'User is not logged in'
                }

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
        signUpActions: bindActionCreators(SignUpActions, dispatch),
        logOutActions: bindActionCreators(LogOutActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
