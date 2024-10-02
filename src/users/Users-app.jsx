import React, {useEffect, useState} from 'react';

import './Users-style.css';

import Success from './Success';
import User from './User';
import Consumer from "./Consumer";
import {json} from "react-router-dom";

// Тут список пользователей: https://reqres.in/api/users

function UsersApp() {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() =>{
        fetch('https://reqres.in/api/users ')
            .then(res => res.json())
            .then((json) => {
                setUsers(json.data);
            }).catch(err => {
                console.warn(err);
                alert('Ошибка при получении пользователей')
        })
            .finally(() => setLoading(false));

    }, []);

    const onChangeSearchValue = (event) =>{
        setSearchValue(event.target.value);

    }

    return (
        <div className="Users-app">
            <Consumer
                onChangeSearchValue={onChangeSearchValue}
                searchValue={searchValue}
                items={users}
                isLoading={isLoading}/>
            {/* <Success /> */}
        </div>
    );
}

export default UsersApp;