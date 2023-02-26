import Github from "@images/github.png";
import styles from "./Navbar.module.css";
import Logo from "@images/chess.png";
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Image src={Logo} alt="Navbar Logo" height={50} width={50} priority={true} />
                <p>Chessboard</p>
            </div>
            <div className={styles.social}>
                <Link href="https://github.com/bilal-23/ChessBoard-Moonshot" target={"_blank"} rel="noopener noreferrer">
                    Repo
                    <Image src={Github} alt="Github" width={50} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar