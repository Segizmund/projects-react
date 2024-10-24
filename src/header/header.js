import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="shadow-md w-full z-50 bg-[#00ADB5] text-[#EEEEEE] font-bold">
            <div className="container mx-auto items-center justify-between py-3">
                <nav className={'flex gap-5'}>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/counter'}>Счетчик</NavLink>
                    <NavLink to={'/modal'}>Модальное окно</NavLink>
                    <NavLink to={'/quiz'}>Квиз</NavLink>
                    <NavLink to={'/users'}>Пользователи</NavLink>
                    <NavLink to={'/converter'}>Конвертер валют</NavLink>
                    <NavLink to={'/photos'}>Коллекция фотографий</NavLink>
                </nav>
            </div>
        </header>
)
    ;
}

export default Header;