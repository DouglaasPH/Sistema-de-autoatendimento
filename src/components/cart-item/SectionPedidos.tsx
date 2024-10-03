import styles from './styles.module.css';    
import { useDispatch, useSelector } from "react-redux";
import { verMeusPedidos } from "../../redux/slice";


function SectionPedidos() {
    interface RootState {
        itensSelecionados: string[];
        itensSelecionadosLength: number;
        verMeusPedidos: boolean;
    }
    const stateGlobal = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    console.log(stateGlobal.itensSelecionados)

    function fecharSection() {
        dispatch(verMeusPedidos(false));
        const body = document.body;
        body.style.overflow = 'auto';
    }

    function gerarTags() {
        const array = stateGlobal.itensSelecionados;
        //ADICIONAR PREÇO EM CADA PRODUTO, POR MEIO DE UM NOVO STATE DO REDUX
        //COLOCAR TUDO AQUI E TERMINAR
        console.log(array)
        return (
            <h1>"HELLO</h1>
        )
    }

    return (
        <div className={styles.divPai}>

            <section className={styles.section}>
                <div className={styles.divUm}>
                    <button className={styles.simbolo} onClick={fecharSection}>×</button>
                    <h1 className={styles.tituloPrincipal}>MEUS PEDIDOS</h1>
                </div>

                <div className={styles.divDois}>
                    {stateGlobal.itensSelecionados.length === 0 ? <h1 className={styles.naoEscolheu}>você ainda não escolheu.</h1> : gerarTags()}
                </div>
            </section>
        </div>

    )
}

export default SectionPedidos;