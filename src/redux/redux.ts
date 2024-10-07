import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

interface tipoDoPreco {
    [chave: string]: number
};

let tipoDaAtualizacao = "";

const initialState = {
    itensSelecionados: [] as string[],
    itensSelecionadosLength: 0,
    verMeusPedidos: false,
    preco: {} as tipoDoPreco
}

const tabelaDePrecos: tipoDoPreco = {
    cafeExpresso: 3,
    cafeCoado: 2,
    cafeMacchiato: 5,
    cafeMocha: 7,
    cappucino: 10,
    chocolateQuente: 8,
    chaDeErvas: 3,
    chaPreto: 3,
    sucoDeManga: 5,
    sucoDeAcerola: 5,
    sucoDeUva: 5,
    tortaDeMaca: 9,
    boloDeCenoura: 7,
    sanduicheQuente: 4,
    sanduicheFrio: 4,
    cookies: 2,
    croissant: 3,
    donuts: 4,
    muffins: 3,
    paoDeQueijo: 6
}

const rootReducer = (state = initialState, action: { type: string, payload: string }) => {
    const decrementar = () => {
        const index = state.itensSelecionados.indexOf(action.payload);

        if (index !== -1) {
            const novoState = [...state.itensSelecionados];
            novoState.splice(index, 1);
            return {
                itensSelecionados: novoState,
                itensSelecionadosLength: novoState.length
            }
        }            
        return;
    };

    const atualizar = () => {
        console.log(tipoDaAtualizacao)
        if (tipoDaAtualizacao === "incrementar") {
            if (!Object.keys(state.preco).includes(action.payload)) {
                return {
                    [action.payload]: tabelaDePrecos[action.payload]
                }
            } else {
                return {
                    [action.payload]: (state.preco[action.payload]) + tabelaDePrecos[action.payload]
                }
            }
        }
        else if (tipoDaAtualizacao === "decrementar") {

            if (state.preco[action.payload] > 0) {
                return {
                    [action.payload]: (state.preco[action.payload]) - tabelaDePrecos[action.payload]
                }
            } else return;
        };
    }
    
    switch (action.type) {
        case "pedidos/addPedido":
            tipoDaAtualizacao = "incrementar";
            return {
                ...state,
                itensSelecionados: [...state.itensSelecionados, action.payload],
                itensSelecionadosLength: state.itensSelecionadosLength + 1,
                preco: {
                    ...state.preco,
                    ...atualizar()
                }
            };
 
        case "pedidos/decrementarPedido":
            tipoDaAtualizacao = "decrementar";
            return {
                ...state,
                ...decrementar(),
                preco: {
                    ...state.preco,
                    ...atualizar()
                }
            };
       
        case "pedidos/cancelPedido":
            return {
                ...state,
                itensSelecionadosLength: 0,
                itensSelecionados: [],
            };        

        case "pedidos/verMeusPedidos":
            console.log("hello", action.payload)
            return {
                ...state,
                verMeusPedidos: action.payload,
            };
        
        default:
            return state;
    }
}

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})


export { store, rootReducer };