import { Outlet } from 'react-router-dom';
import {
    cafeEspresso, cafeCoado, cafeMacchiato, cafeMocha, cappucino, chocolateQuente, chaDeErvas, chaPreto, sucoDeManga,
    sucoDeAcerola, sucoDeUva, tortaDeMaca, boloDeCenoura, sanduicheQuente, sanduicheFrio, cookies, croissant, donuts, muffins, paoDeQueijo
} from '../../images/images';
import styles from './styles.module.css';

export default function PedidoPage() {
    return (
        <div>
            <main>
                <figure>
                    <img src={cafeEspresso} alt="imagem do café espresso " className={styles.imagens} />
                    <figcaption>Café Espresso</figcaption>
                </figure>

                <figure>
                    <img src={cafeCoado} alt="imagem do café coado" className={styles.imagens} />
                    <figcaption>Café Coado</figcaption>
                </figure>

                <figure>
                    <img src={cafeMacchiato} alt="imagem do" className={styles.imagens} />
                    <figcaption>Café Macchiato</figcaption>
                </figure>

                <figure>
                    <img src={cafeMocha} alt="imagem do café mocha" className={styles.imagens} />
                    <figcaption>Café Mocha</figcaption>                
                </figure>

                <figure>
                    <img src={cappucino} alt="imagem do cappucino" className={styles.imagens} />
                    <figcaption>Cappucino</figcaption>                
                </figure>

                <figure>
                    <img src={chocolateQuente} alt="imagem do chocolate quente" className={styles.imagens} />
                    <figcaption>Chocolate Quente</figcaption>                
                </figure>

                <figure>
                    <img src={chaDeErvas} alt="imagem do chá de ervas" className={styles.imagens} />
                    <figcaption>Chá de Ervas</figcaption>                
                </figure>

                <figure>
                    <img src={chaPreto} alt="imagem do chá preto" className={styles.imagens} />
                    <figcaption>Chá Preto</figcaption>                
                </figure>

                <figure>
                    <img src={sucoDeManga} alt="imagem do suco de manga" className={styles.imagens} />
                    <figcaption>Suco de Manga</figcaption>                
                </figure>

                <figure>
                    <img src={sucoDeAcerola} alt="imagem do suco de acerola" className={styles.imagens} />
                    <figcaption>Suco de Acerola</figcaption>                
                </figure>

                <figure>
                    <img src={sucoDeUva} alt="imagem do suco de uva" className={styles.imagens} />
                    <figcaption>Suco de Uva</figcaption>                
                </figure>

                <figure>
                    <img src={tortaDeMaca} alt="imagem do" className={styles.imagens} />
                    <figcaption>Torta de Maça</figcaption>                
                </figure>

                <figure>
                    <img src={boloDeCenoura} alt="imagem do bolo de cenoura" className={styles.imagens} />
                    <figcaption>Bolo de Cenoura</figcaption>                
                </figure>

                <figure>
                    <img src={sanduicheQuente} alt="imagem do sanduiche quente" className={styles.imagens} />
                    <figcaption>Sanduíche Quente</figcaption>                
                </figure>

                <figure>
                    <img src={sanduicheFrio} alt="imagem do sanduiche frio" className={styles.imagens} />
                    <figcaption>Sanduíche Frio</figcaption>                
                </figure>

                <figure>
                    <img src={cookies} alt="imagem do cookies" className={styles.imagens} />
                    <figcaption>Cookies</figcaption>                
                </figure>

                <figure>
                    <img src={croissant} alt="imagem do croissant" className={styles.imagens} />
                    <figcaption>Croissant</figcaption>                
                </figure>

                <figure>
                    <img src={donuts} alt="imagem do donuts" className={styles.imagens} />
                    <figcaption>Donuts</figcaption>                
                </figure>

                <figure>
                    <img src={muffins} alt="imagem do muffins" className={styles.imagens} />
                    <figcaption>Muffins</figcaption>                
                </figure>

                <figure>
                    <img src={paoDeQueijo} alt="imagem do pão de queijo" className={styles.imagens} />
                    <figcaption>Pão de Queijo</figcaption>                
                </figure>
            </main>

            <Outlet/>
       </div>
    )
}