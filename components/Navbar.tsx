import React from 'react';
import styles from "./Navbar.module.css";
import Logo from "@images/chess.png";
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={Logo} alt="Navbar Logo" height={50} width={50} priority={true} />
                <p>Chessboard</p>
            </div>
            <div className="theme-container">
                hello
            </div>
        </nav>
    )
}

export default Navbar