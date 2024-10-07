import styles from './styles.module.css';    
import { useDispatch, useSelector } from "react-redux";
import { addPedido, decrementarPedido, verMeusPedidos } from "../../redux/slice";
import { imagens } from '../../images/images';

interface tipoDoProduto {
    [chave: string]: string
};

const nomeDoProduto: tipoDoProduto = {
    cafeExpresso: "Café Expresso",
    cafeCoado: "Café Coado",
    cafeMacchiato: "Café Macchiato",
    cafeMocha: "Café Mocha",
    cappucino: "Cappucino",
    chocolateQuente: "Chocolate Quente",
    chaDeErvas: "Chá de Ervas",
    chaPreto: "Chá Preto",
    sucoDeManga: "Suco de Manga",
    sucoDeAcerola: "Suco de Acerola",
    sucoDeUva: "Suco de Uva",
    tortaDeMaca: "Torta de Maçã",
    boloDeCenoura: "Bolo de Cenoura",
    sanduicheQuente: "Sanduiche Quente",
    sanduicheFrio: "Sanduiche Frio",
    cookies: "Cookies",
    croissant: "Croissant",
    donuts: "Donuts",
    muffins: "Muffins",
    paoDeQueijo: "Pão de Queijo"    
}

function SectionPedidos() {
    interface valorDoObjeto {
        [chave: string]: number;
    };
    interface RootState {
        preco: valorDoObjeto;
        itensSelecionados: string[];
        itensSelecionadosLength: number;
        verMeusPedidos: boolean;
    };
    const stateGlobal = useSelector((state: RootState) => state);
    const dispatch = useDispatch();

    function fecharSection() {
        dispatch(verMeusPedidos(false));
        const body = document.body;
        body.style.overflow = 'auto';
    }

    function gerarTags() {
        const todosItensSelecionados = stateGlobal.itensSelecionados;
        interface QuantidadeDeItensSelecionados {
            [key: string]: number; // Propriedades dinâmicas com chave do tipo string e valor do tipo number
        }
        let quantidadeDeItensSelecionados: QuantidadeDeItensSelecionados = {};

        for (let i = 0; i < todosItensSelecionados.length; i++) {
            const quantidadeDoItem = todosItensSelecionados.filter(item => item === todosItensSelecionados[i]).length;
            //verificar se um elemento já não está contalizado
            if (!Object.keys(quantidadeDeItensSelecionados).includes(todosItensSelecionados[i])) {
                quantidadeDeItensSelecionados = {
                    ...quantidadeDeItensSelecionados,
                    [todosItensSelecionados[i]]: quantidadeDoItem
                }
            }
        }

        function incrementar(itemName: string) {
            quantidadeDeItensSelecionados = {
                [itemName]: quantidadeDeItensSelecionados[itemName] + 1
            };
            dispatch(addPedido(itemName));
        }

        function decrementar(itemName: string) {
            quantidadeDeItensSelecionados = {
                [itemName]: quantidadeDeItensSelecionados[itemName] - 1
            };
            dispatch(decrementarPedido(itemName))
        }
        const sections = [];
        for (const item in quantidadeDeItensSelecionados) {
            sections.push(
                <section className={styles.sectionParaCadaItem}>
                    <img src={imagens[item]} />
                    <div className={styles.divParaInformacoes}>
                        <h3 className={styles.nomeDoItem}>{nomeDoProduto[item]}</h3>
                        <h4 className={styles.valorDoItem}>R${stateGlobal.preco[item]},00</h4>
                    </div>
                    <div className={styles.incrementarOuDecrementar}>
                        <button className={styles.decrementar} onClick={() => decrementar(item)}>-</button>
                        <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados[item]}</p>
                        <button className={styles.incrementar} onClick={() => incrementar(item)}>+</button>
                    </div>
                </section>
            );
        }
        return (
            <div>{sections}</div>
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