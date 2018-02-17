import React from 'react';

import LoginFrom from '../../views/login/LoginForm';

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginFrom />
        );
    }
}

export default LoginComponent;