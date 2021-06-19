import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {
    return (
        <>
            <div className={s.header}>
                <NavLink className={s.NavLink} to={'/pre-junior'}>PreJunior</NavLink>
                <NavLink className={s.NavLink} to={'/junior'}>Junior</NavLink>
                <NavLink className={s.NavLink} to={'/junior_plus'}>JuniorPlus</NavLink>
                <NavLink className={s.NavLink} to={'/middle'}>Middle</NavLink>
            </div>
        </>
    )
}

export default Header
