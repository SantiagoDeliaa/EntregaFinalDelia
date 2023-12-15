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
                    <NavLink to='/' className={styles.NavLinkOption}>HOME</NavLink>
                    <NavLink to='/category/Shirts' className={styles.NavLinkOption}>SHIRTS</NavLink>
                    <NavLink to='/category/Pants' className={styles.NavLinkOption}>PANTS</NavLink>
                    <NavLink to='/category/Shoes' className={styles.NavLinkOption}>SHOES</NavLink>
                </div>
                <div className="cart-container">
                    <CartWidget />
                </div>
            </nav>
        </header>
    )   
}
