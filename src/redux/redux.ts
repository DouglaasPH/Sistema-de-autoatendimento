import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

const initialState = {
    itensSelecionados: [] as string[],
    itensSelecionadosLength: 0,
    verMeusPedidos: false
}


const rootReducer = (state = initialState, action: {type: string, payload: string}) => {
    switch (action.type) {
        case "pedidos/addPedido":
            return {
                ...state,
                itensSelecionados: [...state.itensSelecionados, action.payload],
                itensSelecionadosLength: state.itensSelecionadosLength + 1
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