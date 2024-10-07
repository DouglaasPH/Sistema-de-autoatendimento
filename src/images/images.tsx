import cafeExpresso from './itens-para-venda/café-espresso.jpg'
import cafeCoado from './itens-para-venda/café-coado.jpg'
import cafeMacchiato from './itens-para-venda/café-macchiato.jpg'
import cafeMocha from './itens-para-venda/café-mocha.png'
import cappucino from './itens-para-venda/cappucino.jpeg'
import chocolateQuente from './itens-para-venda/chocolate-quente.jpeg'
import chaDeErvas from './itens-para-venda/chá-de-ervas.jpeg'
import chaPreto from './itens-para-venda/chá-preto.jpeg'
import sucoDeManga from './itens-para-venda/suco-de-manga.jpeg'
import sucoDeAcerola from './itens-para-venda/suco-de-acerola.jpeg'
import sucoDeUva from './itens-para-venda/suco-de-uva.jpeg'
import tortaDeMaca from './itens-para-venda/torta-de-maçã.jpeg'
import boloDeCenoura from './itens-para-venda/bolo-de-cenoura.jpeg'
import sanduicheQuente from './itens-para-venda/sanduíche-quente.jpeg'
import sanduicheFrio from './itens-para-venda/sanduíche-frio.jpeg'
import cookies from './itens-para-venda/cookies.jpeg'
import croissant from './itens-para-venda/croissant.jpeg'
import donuts from './itens-para-venda/donuts.jpeg'
import muffins from './itens-para-venda/muffins.jpeg'
import paoDeQueijo from './itens-para-venda/pão-de-queijo.jpeg'

interface tipoDasImagens {
    [chave: string]: string
};    
    
const imagens: tipoDasImagens = {
    cafeExpresso,
    cafeCoado,
    cafeMacchiato,
    cafeMocha,
    cappucino,
    chocolateQuente,
    chaDeErvas,
    chaPreto,
    sucoDeManga,
    sucoDeAcerola,
    sucoDeUva,
    tortaDeMaca,
    boloDeCenoura,
    sanduicheQuente,
    sanduicheFrio,
    cookies,
    croissant,
    donuts,
    muffins,
    paoDeQueijo    
}

export { imagens };