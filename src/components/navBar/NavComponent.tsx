import { Outlet, useNavigate } from "react-router-dom";
import styles from "./NavComponentsCss.module.css";
import { useDispatch, useSelector } from "react-redux";
import { verMeusPedidos } from "../../redux/slice";
//import SectionPedidos from "../cart-item/SectionPedidos";
//import { RootState } from "@reduxjs/toolkit/query";

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
    interface RootState {
        itensSelecionados: string[];
        itensSelecionadosLength: number;
        verMeusPedidos: boolean;
    }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const store = useSelector((state: RootState) => state);
    function tabelaPedidos() {
        if (store.verMeusPedidos) {
            dispatch(verMeusPedidos(false));            
        } else {            
            dispatch(verMeusPedidos(true));              
            const body = document.body;
            body.style.overflow = 'hidden';            
        }
    }

    function voltarParaPageHome() {
        return navigate(-1);
    }
    
    return (
        <>
            <nav className={styles.containerNavPedido}>
                <a className={styles.nomeLogo} onClick={voltarParaPageHome}>Cafeteria Phelipe</a>
                <button className={styles.botaoDePedidos} onClick={tabelaPedidos}>Meus Pedidos <a>({store.itensSelecionadosLength})</a></button>
            </nav>
            <Outlet />
        </>
    )
}

export { NavParaPaginaHome, NavParaPaginaPedido };