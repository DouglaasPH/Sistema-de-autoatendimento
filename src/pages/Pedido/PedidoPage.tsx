import {
    cafeEspresso, cafeCoado, cafeMacchiato, cafeMocha, cappucino, chocolateQuente, chaDeErvas, chaPreto, sucoDeManga,
    sucoDeAcerola, sucoDeUva, tortaDeMaca, boloDeCenoura, sanduicheQuente, sanduicheFrio, cookies, croissant, donuts, muffins, paoDeQueijo
} from '../../images/images';
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
                    <img src={cafeEspresso} alt="café expresso" className={styles.imagens} />
                    <figcaption>Café Expresso</figcaption>
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={cafeCoado} alt="café coado" className={styles.imagens} />
                    <figcaption>Café Coado</figcaption>
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={cafeMacchiato} alt="café macchiato" className={styles.imagens} />
                    <figcaption>Café Macchiato</figcaption>
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={cafeMocha} alt="café mocha" className={styles.imagens} />
                    <figcaption>Café Mocha</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={cappucino} alt="cappucino" className={styles.imagens} />
                    <figcaption>Cappucino</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={chocolateQuente} alt="chocolate quente" className={styles.imagens} />
                    <figcaption>Chocolate Quente</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={chaDeErvas} alt="chá de ervas" className={styles.imagens} />
                    <figcaption>Chá de Ervas</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={chaPreto} alt="chá preto" className={styles.imagens} />
                    <figcaption>Chá Preto</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={sucoDeManga} alt="suco de manga" className={styles.imagens} />
                    <figcaption>Suco de Manga</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={sucoDeAcerola} alt="suco de acerola" className={styles.imagens} />
                    <figcaption>Suco de Acerola</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={sucoDeUva} alt="suco de uva" className={styles.imagens} />
                    <figcaption>Suco de Uva</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={tortaDeMaca} alt="torta de maca" className={styles.imagens} />
                    <figcaption>Torta de Maça</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={boloDeCenoura} alt="bolo de cenoura" className={styles.imagens} />
                    <figcaption>Bolo de Cenoura</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={sanduicheQuente} alt="sanduiche quente" className={styles.imagens} />
                    <figcaption>Sanduíche Quente</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={sanduicheFrio} alt="sanduiche frio" className={styles.imagens} />
                    <figcaption>Sanduíche Frio</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={cookies} alt="cookies" className={styles.imagens} />
                    <figcaption>Cookies</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={croissant} alt="croissant" className={styles.imagens} />
                    <figcaption>Croissant</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={donuts} alt="donuts" className={styles.imagens} />
                    <figcaption>Donuts</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={muffins} alt="muffins" className={styles.imagens} />
                    <figcaption>Muffins</figcaption>                
                </figure>

                <figure onClick={AdicionarAoCarrinho}>
                    <img src={paoDeQueijo} alt="pão de queijo" className={styles.imagens} />
                    <figcaption>Pão de Queijo</figcaption>                
                </figure>
            </main>

            {itensSelecionadosLength !== 0 ? <CancelarOuFinalizarPedido /> : null}                
        </div>
    )
}

//                    