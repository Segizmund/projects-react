import React from 'react';
import { NavLink } from "react-router-dom"; // Импортируйте Link

function Header() {
    return (
        <header className="bg-white shadow-md w-full z-50">
            <div>
                <nav>
                    <NavLink to={'/'}>Главная</NavLink>
                    <NavLink to={'/counter'}>Сетчик</NavLink>
                </nav>
            </div>
        </header>
)
    ;
}

export default Header;