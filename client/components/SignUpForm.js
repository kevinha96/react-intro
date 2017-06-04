/**
 * SignUpForm
 * This is the sign up form for new users
 * author: Kevin Ha
 */

import React from 'react';

class SignUpForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    submitForm = (event) => {
        alert('submit form button working');
        this.props.signUpFunction(this.state);
        event.preventDefault();
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    render() {
        return(
            
            <form onSubmit={this.submitForm}>
                <label>
                    Email:
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange} />
                </label>
                <label>
                    Password:
                    <input type="text" value={this.state.password} onChange={this.handlePasswordChange} />
                </label>
                <input type="submit" value="Sign Up" />
            </form>    

        );
    }
}

export default SignUpForm;
