import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { cancelPedido } from '../../redux/slice';
import { useNavigate } from 'react-router-dom';

function CancelarOuFinalizarPedido() {
    interface RootState {
        itensSelecionados: string[];
        itensSelecionadosLength: number;
    }
    const store = useSelector((state: RootState) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function cancelarPedido() {
        if (store.itensSelecionadosLength > 0) {
            dispatch(cancelPedido(0))
            setTimeout(() => {
                navigate(-1)
            }, 800);
        }
    }
    return (
        <>
            <div className={styles.div}>
                <button className={styles.button}>Finalizar Pedido</button>
                <button className={styles.button} onClick={cancelarPedido}>Cancelar Pedido</button>
            </div>
        </>
    )
}

export default CancelarOuFinalizarPedido;