import styles from './styles.module.css';    
import { useDispatch, useSelector } from "react-redux";
import { verMeusPedidos } from "../../redux/slice";
import {
    cafeExpresso, cafeCoado, cafeMacchiato, cafeMocha, cappucino, chocolateQuente, chaDeErvas, chaPreto, sucoDeManga,
    sucoDeAcerola, sucoDeUva, tortaDeMaca, boloDeCenoura, sanduicheQuente, sanduicheFrio, cookies, croissant, donuts, muffins, paoDeQueijo
} from '../../images/images';
import { addPedido } from '../../redux/slice';


function SectionPedidos() {
    interface RootState {
        itensSelecionados: string[];
        itensSelecionadosLength: number;
        verMeusPedidos: boolean;
    }
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
                console.log(quantidadeDeItensSelecionados);
                quantidadeDeItensSelecionados = {
                    ...quantidadeDeItensSelecionados,
                    [todosItensSelecionados[i]]: quantidadeDoItem
                }
                 console.log(quantidadeDeItensSelecionados);                
            }
        }

        function incrementar(itemName: string) {
            console.log(quantidadeDeItensSelecionados);
            quantidadeDeItensSelecionados = {
                [itemName]: quantidadeDeItensSelecionados[itemName] + 1
            }
            dispatch(addPedido(itemName));
            console.log(quantidadeDeItensSelecionados)
        }

        const sections = [];
        for (const item in quantidadeDeItensSelecionados) {
            switch (item) {
                case 'cafeExpresso':                   
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={cafeExpresso}  />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Café Expresso</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.cafeExpresso}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('cafeExpresso')}>+</button>
                            </div>
                        </section>                        
                    );
                    break;

                case 'cafeCoado':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={cafeCoado} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Café Coado</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.cafeCoado}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('cafeCoado')}>+</button>
                            </div>
                        </section>
                    );
                    break;      
                
                case 'cafeMacchiato':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={cafeMacchiato}  />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Café Macchiato</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.cafeMacchiato}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('cafeMacchiato')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'cafeMocha':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={cafeMocha} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Café Mocha</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>–</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.cafeMocha}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('cafeMocha')}>+</button>
                            </div>
                        </section>
                    );
                    break;            
                
                case 'cappucino':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={cappucino} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Cappucino</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.cappucino}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('cappucino')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'chocolateQuente':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={chocolateQuente} />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Chocolate Quente</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.chocolateQuente}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('chocolateQuente')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'chaDeErvas':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={chaDeErvas} /> 
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Chá de Ervas</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.chaDeErvas}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('chaDeErvas')}>+</button>
                            </div>
                        </section>
                    );
                    break;
                
                case 'chaPreto':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={chaPreto} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Chá Preto</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.chaPreto}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('chaPreto')}>+</button>
                            </div>
                        </section>
                    );
                    break;   
                
                case 'sucoDeManga':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={sucoDeManga} />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Suco de Manga</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.sucoDeManga}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('sucoDeManga')}>+</button>
                            </div>
                        </section>
                    );
                    break;                    
                
                case 'sucoDeAcerola':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={sucoDeAcerola}  />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Suco de Acerola</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.sucoDeAcerola}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('sucoDeAcerola')}>+</button>
                            </div>
                        </section>
                    );
                    break;                

                case 'sucoDeUva':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={sucoDeUva} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Suco de Uva</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.sucoDeUva}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('sucoDeUva')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'tortaDeMaca':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={tortaDeMaca} />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Torta de Maçã</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.tortaDeMaca}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('tortaDeMaca')}>+</button>
                            </div>
                        </section>
                    );
                    break;                

                case 'boloDeCenoura':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={boloDeCenoura}  />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Bolo de Cenoura</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.boloDeCenoura}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('boloDeCenoura')}>+</button>
                            </div>
                        </section>
                    );
                    break;
                
                case 'sanduicheQuente':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={sanduicheQuente} />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Sanduiche Quente</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.sanduicheQuente}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('sanduicheQuente')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'sanduicheFrio':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={sanduicheFrio}  />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Sanduiche Frio</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.sanduicheFrio}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('sanduicheFrio')}>+</button>
                            </div>
                        </section>
                    );
                    break;                

                case 'cookies':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={cookies} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Cookies</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.cookies}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('cookies')}>+</button>
                            </div>
                        </section>
                    );
                    break;
                
                case 'croissant':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={croissant} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Croissant</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.croissant}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('croissant')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'donuts':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={donuts} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Donuts</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.donuts}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('donuts')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                
                case 'muffins':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={muffins} />
                             <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Muffins</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.muffins}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('muffins')}>+</button>
                            </div>
                        </section>
                    );
                    break;                

                case 'paoDeQueijo':
                    sections.push(
                        <section className={styles.sectionParaCadaItem}>
                            <img src={paoDeQueijo} />
                            <div className={styles.divParaInformacoes}>
                                <h3 className={styles.nomeDoItem}>Pão de Queijo</h3>
                                <h4 className={styles.valorDoItem}>R$5,00</h4>
                            </div>
                            <div className={styles.incrementarOuDecrementar}>
                                <button className={styles.decrementar}>-</button>
                                <p className={styles.quantidadeDoItem}>{quantidadeDeItensSelecionados.paoDeQueijo}</p>
                                <button className={styles.incrementar} onClick={() => incrementar('paoDeQueijo')}>+</button>
                            </div>
                        </section>
                    );
                    break;                
                default:
                    break;
            }            
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