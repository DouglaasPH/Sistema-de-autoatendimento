import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pedidos: "",
    cancelarPedidos: 0,
    meusPedidos: false
};

const pedidoSlice = createSlice({
    name: "pedidos",
    initialState,
    reducers: {
        addPedido: (state, action) => {
            state.pedidos = action.payload;
        }
    }
})

const cancelarPedidoSlice = createSlice({
    name: "pedidos",
    initialState,
    reducers: {
        cancelPedido: (state, action) => {
            state.cancelarPedidos = action.payload;
        }
    }
})

const meusPedidosSlice = createSlice({
    name: "pedidos",
    initialState,
    reducers: {
        verMeusPedidos: (state, action) => {
            state.cancelarPedidos = action.payload;
        }
    }
})

export const { addPedido } = pedidoSlice.actions;
export const { cancelPedido } = cancelarPedidoSlice.actions;
export const { verMeusPedidos } = meusPedidosSlice.actions;
export default pedidoSlice.reducer;