/**
* Login Actions
* auth actions
* author: @
*/

import types from '../config/action-types';
import API from '../config/api';
import Helpers from './helpers';

// action functions
function loginSuccessful(email, isLoggedIn) {
    return {
        type: types.LOGIN_SUCCESSFUL,
        isLoggedIn: isLoggedIn,
        email: email,
    }
}

// These are all of the functions that you can utilize
module.exports = {
    getLogin: function getLogin() {
        // Getting if we are logged in or not. If we are, update the Redux user to the logged in data.
        return dispatch => {
            return fetch(API.Login, API.GET_CONFIG)
            .then(Helpers.checkStatus)
            .then(Helpers.parseJSON)
            .then((json) => {
                return dispatch(loginSuccessful(json.email, true));
            })
            .catch((error) => {
                return dispatch(loginSuccessful('', false));
            });
        }
    },

    login: function login(data) {
        // Dispatch tells Redux to send to store
        return dispatch => {
            return fetch(API.LOGIN, API.POST_CONFIG(data))
            .then(Helpers.checkStatus)
            .then(Helpers.parseJSON)
            .then((json) => {
                return dispatch(loginSuccessful(json.email, true));
            })
            .catch((error) => {
                error.response.json().then((error) => {alert('the error is: ' + JSON.stringify(error))});
                return dispatch(loginSuccessful('', false));
            });
        }
    }
}
