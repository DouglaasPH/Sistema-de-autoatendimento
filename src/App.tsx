import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import HomePage from "./pages/Home/HomePage"
import {NavParaPaginaHome, NavParaPaginaPedido} from "./components/navBar/NavComponent"
import './App.css';
import PedidoPage from "./pages/Pedido/PedidoPage";
import { useSelector } from "react-redux";
import SectionPedidos from "./components/cart-item/SectionPedidos";
import FinalizarPedidoPage from "./pages/Finalizar Pedido/FinalizarPedidoPage";
  
const browserRoutes = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/">
      <Route index element={<> <NavParaPaginaHome />  <HomePage /> </>} /> 
      <Route path="pedir" element={<> <NavParaPaginaPedido /> <PedidoPage /> </>} />
      <Route path="finalizarPedido" element={<> <NavParaPaginaHome /> <FinalizarPedidoPage /> </>} />
    </Route>
  </Route>
));

function App() {
      interface RootState {
        itensSelecionados: string[];
        itensSelecionadosLength: number;
        verMeusPedidos: boolean;
    }
  const store = useSelector((state: RootState) => state);
  return (
    <>
      {store.verMeusPedidos ? <SectionPedidos /> : null}      

      <RouterProvider router={browserRoutes} />
    </>
)
}

export default App