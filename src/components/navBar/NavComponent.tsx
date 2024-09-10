import { Outlet, useNavigate } from "react-router-dom";
import cafeteriaLogo from "../../images/logo.png";
import styles from "./NavComponentsCss.module.css";

export default function NavComponent() {
    const navigate = useNavigate();

    return (
        <>
            <nav className={styles.containerPai}>
                <img src={cafeteriaLogo} alt="logo" className={styles.logo} />
                <div className={styles.containerFilho}>
                    <a href="" onClick={() => navigate('/')} className={styles.link}>HOME</a>
                    <a href="" className={styles.link}>ABOUT US</a>
                </div>
            </nav>

            <Outlet />
        </>
    )
};