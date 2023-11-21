import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import logo from './assets/logo.svg'
import styles from './navBar.module.css';
import { NavLink, Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link to='/'>
                    <img src={logo} alt="logo Helenius"/>
                </Link>
                <div className={styles.Categories}>
                    <NavLink to='/category/home' className={styles.NavLinkOption}>HOME</NavLink>
                    <NavLink to='/category/shirts' className={styles.NavLinkOption}>T-SHIRTS</NavLink>
                    <NavLink to='/category/pants' className={styles.NavLinkOption}>PANTS</NavLink>
                </div>
                <div className="cart-container">
                    <CartWidget></CartWidget>
                </div>
            </nav>
        </header>
    )   
}
