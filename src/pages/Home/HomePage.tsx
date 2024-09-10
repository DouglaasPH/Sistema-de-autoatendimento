import styles from './HomePage.module.css';
import imgCafe from './../../images/imagem-efeito.png'

function HomePage() {
    return (
        <div className={styles.containerPai} >
            <div className={styles.containerFilho}>
                <h1 className={styles.titulo}>HORA DE DESCOBRIR A MELHOR CAFETERIA DA REGIÃO</h1>
                <p className={styles.paragrafo}>Seja bem-vindo, a melhor cafeteria da região! Contamos com um cardápio especial, para você ter uma experiência inesquecível!</p>
                <div className={styles.containerButtons}>
                    <button className={styles.buttons}>Comprar Agora</button>
                    <button className={styles.buttons}>Ver Cardápio</button>
                </div>
            </div>
            <img className={styles.imgCafe} src={imgCafe} alt="imagem de uma xícara de café" />
        </div>
    )
}

export default HomePage;