import { Outlet } from "react-router-dom";
import styles from "./NavComponentsCss.module.css";

function NavParaPaginaHome() {
    return (
        <>
            <nav className={styles.containerNav}>
                <a className={styles.nomeLogo}>Cafeteria Phelipe</a>
            </nav>
            <Outlet />
        </>

    );       
};

function NavParaPaginaPedido() {
    return (
        <>
            <nav className={styles.containerNavPedido}>
                <a className={styles.nomeLogo}>Cafeteria Phelipe</a>
                <button className={styles.botaoDePedidos}>Meus Pedidos <a>(0)</a></button>
            </nav>
            <Outlet />
        </>
    )
}

export { NavParaPaginaHome, NavParaPaginaPedido };