import React, {Component, createContext} from 'react';
import axios from 'axios';
import {isUserLoggedIn} from '../../../utils/jwtUtil';
import {clearLocalStorage, getLocalStorage, setLocalStorage} from '../../../utils/storageUtil';
import history from '../../../utils/history';

const AuthContext = createContext({
    user: {},
    isAuthenticated: false,
});

const AuthConsumer = AuthContext.Consumer;

class AuthProvider extends Component {

    state = {
        user: getLocalStorage('user') || {},
        userData : isUserLoggedIn() && {
            userName: getLocalStorage('userName'),
            userEmail: getLocalStorage('userEmail'),
            userPicture: getLocalStorage('userPicture')
        },
        isAuthenticated: isUserLoggedIn() || false,
        isLoginModalVisible: false
    };

    login = ({ email, password }) => {
        return axios.post(`https://dev.citytech.global:1443/customers/v1/login`, { email, password }).then((response) => {
            this.setState({ isAuthenticated: true, user: response.data.data });
            return response;
        })
    };

    displayLoginModal = () => {
        this.setState({isLoginModalVisible: true});
    };

    disableLoginModal = () => {
        this.setState({isLoginModalVisible: false});
    };

    loginViaFacebook = (response) => {
        setLocalStorage('userName', response.name);
        setLocalStorage('userEmail', response.email);
        setLocalStorage('userPicture', response.picture.data.url);
        this.disableLoginModal();
        history.push({pathname: '/users'});
    };


    logout = () => {
        this.setState({user: {}, isAuthenticated: false, userData: {}});
        clearLocalStorage('userName');
        clearLocalStorage('userEmail');
        clearLocalStorage('userPicture');
    };

    render() {
        return (
            <AuthContext.Provider
                {...this.props}
                value={{
                    ...this.state,
                    login: this.login,
                    displayLoginModal: this.displayLoginModal,
                    disableLoginModal: this.disableLoginModal,
                    loginViaFacebook: this.loginViaFacebook,
                    logout: this.logout,
                    goToDashboard: this.goToDashboard,
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export {AuthProvider, AuthConsumer, AuthContext};

export const withContext = Component => {
    return props => {
        return (
            <AuthContext.Consumer>
                {
                    globalState => {
                        return (
                            <Component
                                {...globalState}
                                {...props}
                            />
                        );
                    }
                }
            </AuthContext.Consumer>
        );
    };
};
