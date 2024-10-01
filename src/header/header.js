import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="shadow-md w-full z-50 bg-[#00ADB5] text-[#EEEEEE] font-bold">
            <div className="container mx-auto items-center justify-between py-3">
                <nav className={'flex gap-5'}>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/counter'}>Сетчик</NavLink>
                    <NavLink to={'/modal'}>Модальное окно</NavLink>
                    <NavLink to={'/quiz'}>Квиз</NavLink>
                </nav>
            </div>
        </header>
)
    ;
}

export default Header;