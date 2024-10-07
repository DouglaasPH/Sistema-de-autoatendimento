import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pedidos: "",
    cancelarPedidos: 0,
    meusPedidos: false,
    decrementarPedido: 0
};

const incrementarPedidoSlice = createSlice({
    name: "pedidos",
    initialState,
    reducers: {
        addPedido: (state, action) => {
            state.pedidos = action.payload;
        }
    }
})

const decrementarPedidoSlice = createSlice({
    name: "pedidos",
    initialState,
    reducers: {
        decrementarPedido: (state, action) => {
            state.pedidos = action.payload;
        }
    }
});

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

export const { addPedido } = incrementarPedidoSlice.actions;
export const { decrementarPedido } = decrementarPedidoSlice.actions;
export const { cancelPedido } = cancelarPedidoSlice.actions;
export const { verMeusPedidos } = meusPedidosSlice.actions;
export default incrementarPedidoSlice.reducer;