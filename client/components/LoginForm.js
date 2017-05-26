/**
* Login Form
* This is the login form for the app.
* author: @
*/

import React from 'react';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        // binding submitFormFunction to this. this refers to our current class.
        this.submitFormFunction = this.submitFormFunction.bind(this);

        this.state = {
	        
        }
    }
    
    submitForm = (event) => {
        // ES6 function. Sets variable submitForm as a function with event as the input. Autobinds to this (important).
        // Run this when the form gets submitted, prevent the default action
        this.setState({email: event.target.value});
        alert('new email: ' + this.props.user.email);
        event.preventDefault();
    }

    submitFormFunction(event) {
        // Javascript regular function definition, same function as above, but DOESN'T autobind to this. You need to bind it in constructor.
        // Run this when the form gets submitted, prevent the default action
        this.setState({email: event.target.value});
        event.preventDefault();
    }

    componentDidMount() {
        // If you want to do anything when this element first renders, do it here
        // See lifecycle methods: https://facebook.github.io/react/docs/react-component.html

        var { userState } = this.props.user;
    }

    render() {
        // This is where you place your HTML. Inside of here goes components and other HTML elements
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <label>
                        Email:
                        <input type="text" value={userState.email} onChange={this.submitFormFunction} />
                    </label>
                    <input type="submit" value="Submit" /> 
                </form>
           </div> 
        );
    }
}

export default LoginForm;
