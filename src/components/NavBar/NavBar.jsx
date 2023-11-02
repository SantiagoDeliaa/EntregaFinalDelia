import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.svg'
import styles from './navBar.module.css';

export default function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className='logo-container'>
                    <img src={logo} alt="logo Helenius"/>
                </div>
                <div className={styles.navLinks}>
                    <button>Home</button>
                    <button>Products</button>
                    <button>About</button>
                </div>
                <div className="cart-container">
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </header>
    )   
}
