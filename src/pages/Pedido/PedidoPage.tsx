import { imagens } from '../../images/images';
import styles from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addPedido } from '../../redux/slice';
import CancelarOuFinalizarPedido from '../../components/cancelarOuFinalizarPedido/CancelarOuFinalizarPedido';

export default function PedidoPage() {
    const dispatch = useDispatch();
    interface RootState {
        itensSelecionados: string[];
        itensSelecionadosLength: number;
        verMeusPedidos: boolean;
    }

    const itensSelecionadosLength = useSelector((state: RootState) => state.itensSelecionadosLength);

    function AdicionarAoCarrinho(event) {
        console.log(typeof event.target.parentElement, event.target.alt)
        const tipoDoItem = event.target.alt; //string
        dispatch(addPedido(tipoDoItem));
    }

    return (
        <div>
            <main>
                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["cafeExpresso"]} alt="cafeExpresso" className={styles.imagens} />
                    <figcaption>Café Expresso</figcaption>
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["cafeCoado"]} alt="cafeCoado" className={styles.imagens} />
                    <figcaption>Café Coado</figcaption>
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["cafeMacchiato"]} alt="cafeMacchiato" className={styles.imagens} />
                    <figcaption>Café Macchiato</figcaption>
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["cafeMocha"]} alt="cafeMocha" className={styles.imagens} />
                    <figcaption>Café Mocha</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["cappucino"]} alt="cappucino" className={styles.imagens} />
                    <figcaption>Cappucino</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["chocolateQuente"]} alt="chocolateQuente" className={styles.imagens} />
                    <figcaption>Chocolate Quente</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["chaDeErvas"]} alt="chaDeErvas" className={styles.imagens} />
                    <figcaption>Chá de Ervas</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["chaPreto"]} alt="chaPreto" className={styles.imagens} />
                    <figcaption>Chá Preto</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["sucoDeManga"]} alt="sucoDeManga" className={styles.imagens} />
                    <figcaption>Suco de Manga</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["sucoDeAcerola"]} alt="sucoDeAcerola" className={styles.imagens} />
                    <figcaption>Suco de Acerola</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["sucoDeUva"]} alt="sucoDeUva" className={styles.imagens} />
                    <figcaption>Suco de Uva</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["tortaDeMaca"]} alt="tortaDeMaca" className={styles.imagens} />
                    <figcaption>Torta de Maça</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["boloDeCenoura"]} alt="boloDeCenoura" className={styles.imagens} />
                    <figcaption>Bolo de Cenoura</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["sanduicheQuente"]} alt="sanduicheQuente" className={styles.imagens} />
                    <figcaption>Sanduíche Quente</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["sanduicheFrio"]} alt="sanduicheFrio" className={styles.imagens} />
                    <figcaption>Sanduíche Frio</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["cookies"]} alt="cookies" className={styles.imagens} />
                    <figcaption>Cookies</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["croissant"]} alt="croissant" className={styles.imagens} />
                    <figcaption>Croissant</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["donuts"]} alt="donuts" className={styles.imagens} />
                    <figcaption>Donuts</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["muffins"]} alt="muffins" className={styles.imagens} />
                    <figcaption>Muffins</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={imagens["paoDeQueijo"]} alt="paodeQueijo" className={styles.imagens} />
                    <figcaption>Pão de Queijo</figcaption>                
                </figure>
            </main>

            {itensSelecionadosLength !== 0 ? <CancelarOuFinalizarPedido /> : null}                
        </div>
    )
}