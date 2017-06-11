/**
 * Facebook Login Form
 * Facebook Login Authentication form
 * author: Kevin
 */

import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import FacebookLogin from 'react-facebook-login';
import { FACEBOOK_APP_ID } from '../config/settings';
import { browserHistory } from 'react-router';

class FacebookLoginForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
           //handle facebook error
            facebookError: '', 
        }
    }
    
    handleClick = () => {
        alert('facebook login button clicked');
        event.preventDefault();
    }

    responseFacebook = (response) => {
        
        this.setState({
            facebookError: '',
        });

        alert('howdy');
        /*this.props.loginFunction(response);
        .then((data) => {
            if (data.isLoggedIn) {
                browserHistory.push('/');
            } else {
                alert('this is not working');
                this.setState({
                    facebookError: 'error signing up with facebook',
                });
            }
        });*/
    }

    render() {
        return(
//           <button onClick={this.handleClick} className={css(styles.fbButton)} >
//            Log in with Facebook
//           </button>
            <div>
                <FacebookLogin
                appId={FACEBOOK_APP_ID}
                language="en_US"
                scope="public_profile, email, user_birthday"
                auth_type="rerequest"
                callback={this.responseFacebook}
                version="v2.8"
                
            />
            
            {this.state.facebookError
                ? <div>
                {this.state.facebookError}
                </div>
                : null
            }
            </div>
         );
    }
}

const styles = StyleSheet.create({
    fbButton: {
        height: '50px',
        width: '400px',
        marginTop: '10px',
        borderRadius: '2px',
        border: '1px solid blue',
        backgroundColor: 'blue',
        color: 'white'
    },
});

export default FacebookLoginForm;
            
