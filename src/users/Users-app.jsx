import React, {useEffect, useState} from 'react';

import './Users-style.css';

import Success from './Success';
import User from './User';
import Consumer from "./Consumer";
import {json} from "react-router-dom";

// Тут список пользователей: https://reqres.in/api/users

function UsersApp() {
    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
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

    const onClickInvite = (id)=> {
        if(invites.includes(id)){
            setInvites((prev)=> prev.filter((_id) => _id !== id))
        } else {
            setInvites((prev) => [...prev, id]);
        }
    }

    const onClickSendInvites = () =>{
        setSuccess(true)
    }

    const onClickReset = () => {
        setInvites([])
        setSuccess(false)
    }

    return (
        <div className="Users-app">
            {
                success ? (<Success onClickReset={onClickReset} count={invites.length} />
                ) : (
                <Consumer
                    onChangeSearchValue={onChangeSearchValue}
                    searchValue={searchValue}
                    items={users}
                    isLoading={isLoading}
                    invites={invites}
                    onClickInvite={onClickInvite}
                    onClickSendInvites={onClickSendInvites}
                />
                )}
        </div>
    );
}

export default UsersApp;