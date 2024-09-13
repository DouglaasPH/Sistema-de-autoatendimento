import styles from './HomePage.module.css';
import imgCafe from './../../images/imagem-efeito.png'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className={styles.containerPai} >
            <div className={styles.containerFilho}>
                <div className={styles.containerFrases}> 
                    <h1 className={styles.titulo}>PEÇA SEU CAFÉ EM POUCOS TOQUES</h1>
                    <p className={styles.paragrafo}>Seja bem-vindo, a melhor cafeteria da região! Contamos com um cardápio especial, para você ter uma experiência inesquecível!</p>
                </div>
                <div className={styles.containerButtons}>
                    <button className={styles.buttons} onClick={() => navigate('pedir')}>Escolher Pedido</button>
                </div>
            </div>
            <img className={styles.imgCafe} src={imgCafe} alt="imagem de uma xícara de café" />
        </div>
    )
}

export default HomePage;

//                     <button className={styles.buttons}>Escolher Pedido</button>