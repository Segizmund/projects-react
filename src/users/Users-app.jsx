import React from 'react';

import './Users-style.css';

import Success from './Success';
import User from './User';
import Consumer from "./Consumer";

// Тут список пользователей: https://reqres.in/api/users

function UsersApp() {
    return (
        <div className="Users-app">
            <Consumer />
            {/* <Success /> */}
        </div>
    );
}

export default UsersApp;