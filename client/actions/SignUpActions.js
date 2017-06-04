/**
 * Sign Up Actions
 * author: Kevin
 */

import types from '../config/action-types';
import API from '../config/api';
import Helpers from './helpers';

//action functions
function signUpSuccessful(email, isLoggedIn) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        isLoggedIn: isLoggedIn,
        email: email,
    }
}

module.exports = {
    signup: function signup(data) {
        return dispatch => {
            alert('got inside signup action');
            return fetch(API.SIGNUP, API.POST_CONFIG(data))
            .then(Helpers.checkStatus)
            .then(Helpers.parseJSON)
            .then((json) => {
                alert('signup work');
                return dispatch(signUpSuccessful(json.email, true));
            })
            .catch((error) => {
                //alert('signup error');
                error.response.json().then((error) => {alert('the error is: ' + JSON.stringify(error))});
                return dispatch(signUpSuccessful('', false));
            });
        }
    }
}    
