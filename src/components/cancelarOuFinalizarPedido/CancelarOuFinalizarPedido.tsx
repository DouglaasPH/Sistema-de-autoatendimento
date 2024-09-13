import styles from './styles.module.css';

function CancelarOuFinalizarPedido() {
    return (
        <>
            <div className={styles.div}>
                <button className={styles.button}>Finalizar Pedido</button>
                <button className={styles.button}>Cancelar Pedido</button>
            </div>
        </>
    )
}

export default CancelarOuFinalizarPedido;