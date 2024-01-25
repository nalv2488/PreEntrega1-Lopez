import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar() {
    return (

        <>
            <div className='main-navbar'>
            <div className='div-navbar'>
                <img className='logo-epl-main' src="./img/pl-main-logo.png" alt="ELP-logo" />
                <h1 className='h1-header'>EPL</h1>
            </div>
            <div className='div-navbar'>
                <ul>
                    <li className='li-header'>Inicio
                        <a href="#"></a>
                    </li>
                    <li className='li-header'>Equipos
                        <a href="#"></a>
                    </li>
                    <li className='li-header'>Tienda
                        <a href="#"></a>
                    </li>
                </ul>
            </div>

            </div>
            <CartWidget />

        </>
    )
}

export default NavBar