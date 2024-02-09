import React from 'react';
import Link from "next/link";
import styles from './Header.module.css';


const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.li}>
                        <Link className={styles.link} href={'/'}>Home</Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.link} href={'/products'}>Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;