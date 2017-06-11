/**
 * Facebook Login Actions
 * author: Kevin 
 * used https://github.com/lightninglu10/silo-web/blob/master/client/actions/login.js for motivation
 */

import types from '../config/action-types';
import API from '../config/api';
import Helpers from './helpers';


function requestFacebookLogin() {
    return {
        type: types.FACEBOOK_LOGIN_REQUEST,
        isFacebookFetching: true,
        isLoggedIn: false,
    }
}

function receiveFacebookLoginHelper(json) {
    return {
        type: types.FACEBOOK_LOGIN_SUCCESSFUL,
        isFacebookFetching: false,
        isLoggedIn: true,
    }
}

module.exports = {
    facebookLogin: function facebookLogin(facebook) {
        var data = {'access_token': facebook.accessToken}
        return dispatch => {
            alert('action called');
            dispatch(requestFacebookLogin());
            return fetch(API.FACEBOOK, API.POST_CONFIG(data))
            .then(Helpers.checkStatus)
            .then((json) => {
                return dispatch(receiveFacebookLoginHelper());
            })
            .catch(error => {
                //catch facebook signup error
                //return dispatch(loginError('Facebook login error ' + error));
            })    
        }
    }        
}
    
