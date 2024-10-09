import styles from './styles.module.css';
    
function FinalizarPedidoPage() {
    return (
        <main className={styles.conteudoPrincipal}>
            
            <div className={styles.divUm}>
                <article className={styles.artigoDeItens}>
                    <section>
                        <h2 className={styles.subtituloParaSecao}>PEDIDOS</h2>
                    </section>

                    <ul className={styles.pedidos}>
                        <li className={styles.quantidade}>1x</li>
                        <li className={styles.tipo}>Cappucino</li>
                        <li className={styles.preco}>R$6,00</li>
                    </ul>

                    <ul className={styles.pedidos}>
                        <li className={styles.quantidade}>1x</li>
                        <li className={styles.tipo}>Cappucino</li>
                        <li className={styles.preco}>R$7,90</li>
                    </ul>

                    <ul className={styles.pedidos}>

                        <li className={styles.quantidade}>1x</li>
                        <li className={styles.tipo}>Croissant</li>
                        <li className={styles.preco}>R$5,37</li>
                    </ul>
                </article>

                <article className={styles.artigoDeInformacoes}>
                    <section className={styles.sectionNumeroDeMesa}>
                        <h2 className={styles.subtituloParaSecao}>NÚMERO DA MESA</h2>
                        <form action="" id="entrada-do-numero-de-mesa" name="numero-de-mesa">
                            <fieldset className={styles.campoParaNumeroDaMesa} form="entrada-do-numero-de-mesa">
                                <label>Número da mesa</label>
                                <input type="text" id="input-para-numero-de-mesa" className={styles.inputDoNumeroDeMesa}
                                    name="numero-de-mesa" required />
                            </fieldset>
                        </form>
                    </section>

                    <section className={styles.secitonMaisInfo}>
                        <h2 className={styles.subtituloParaSecao}>ADICIONAR ESPECIFICAÇÕES AO PEDIDO</h2>
                        <form action="" id='entrada-de-especificao-do-pedido' name='especificação-do-pedido'>
                            <fieldset className={styles.campoParaEspecificacaoDoPedido} form='entrada-de-especificacao-do-pedido'>
                                <label>Detalhar pedido</label>
                                <input type="text" id='input-para-detalhar-pedido' className={styles.inputParaDetalharPedido}
                                    name='especificação-do-pedido' />
                            </fieldset>
                        </form>
                    </section>
                </article>
            </div>

            <div className={styles.divDois}>
                <button name='pedidos' form='entrada-do-numero-de-mesa' formAction='entrada-de-especificacao-do-pedido'
                    className={styles.botao}>FINALIZAR PEDIDO</button>
                <button className={styles.botao}>CANCELAR PEDIDO</button>
            </div>

    </main>
    )
}

export default FinalizarPedidoPage;